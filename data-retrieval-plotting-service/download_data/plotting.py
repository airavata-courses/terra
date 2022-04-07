from fileinput import filename
import boto3
import botocore
from botocore.client import Config
import matplotlib.pyplot as plt
from metpy.io import Level2File
from metpy.plots import add_timestamp, ctables
from mpl_toolkits.axes_grid1 import make_axes_locatable
import numpy as np
import nexradaws
import json
import cloudinary
import cloudinary.uploader
from .models import ImagePath
from django.core.exceptions import ObjectDoesNotExist
from .rabbitmq_producer import WeatherRpcClient
import pandas as pd
import os

api_key = os.environ.get('API_KEY')
api_secret = os.environ.get('API_SECRET')
print(api_key)
print(api_secret)

# Configuration for the cloudinary file upload
# cloudinary.config(
#     cloud_name="dekapnfya",
#     api_key="693518538948276",
#     api_secret="I_V74DpPwtkwj1yQk-Ib5aAPQyQ"
# )

cloudinary.config(
    cloud_name="dekapnfya",
    api_key=api_key,
    api_secret=api_secret
)

# Read station data
station_data = pd.read_csv('radar_station.csv')
# Download the data from S3 bucket
s3 = boto3.resource('s3', config=Config(signature_version=botocore.UNSIGNED,
                                        user_agent_extra='Resource'))

# Connect to the nexradAWS interface
conn = nexradaws.NexradAwsInterface()

# Ref: https://nexradaws.readthedocs.io/en/latest/apidocs.html
# https://unidata.github.io/MetPy/latest/examples/formats/NEXRAD_Level_2_File.html


def download_file_from_s3(start_date, radar_station, end_date, download=1):

    # Get the available files within a start date and end date of a particular station
    try:
        availScans = conn.get_avail_scans_in_range(
            start_date, end_date, radar_station)
    except:
        return ("No data available",)

    # Consider only one scan for simplicity
    if download == 1:
        availScans = availScans[:1]

    if len(availScans) == 0:
        return ("No data available",)

    # Iterate through all the scans (Only one object for now)
    for obj in availScans:

        # Get the file path need to be downloaded from S3 using the scan object
        file_path = obj.awspath + '/' + obj.filename

        try:
            # If the query is already run, simply return the cloudinary URL.

            print("Plot already exists for the data,  return the URL from the database")
            obj = ImagePath.objects.get(filename=obj.filename)
            return (obj.url,)
        except ObjectDoesNotExist:
            print("Download and start plotting")

        # Store the s3 bucket into a file_obj
        print("*"*20)
        print(file_path)
        try:
            # if file_path[:-2] == 'gz':
            s3.Bucket('noaa-nexrad-level2').download_file(file_path, 'out')
            f = Level2File('out')
            # else:
            #     s3.Bucket(
            #         'noaa-nexrad-level2').download_file(file_path, 'out.gz')
            #     f = Level2File('out.gz')
        except:
            print("file not readable")
            return ("No data available",)
        print("*"*20)

        # file_obj = s3.Object('noaa-nexrad-level2', file_path).get()['Body']
        print("File downloaded and loaded")
        # Use MetPy to read the file
        # f = Level2File('out.gz')

        # TODO:
        # Currently only one iteration will be run.

    # Below code just extracts the data from the .gz file and extracts relevant data information needed for the plot
    try:
        sweep = 0
        # First item in ray is header, which has azimuth angle
        az = np.array([ray[0].az_angle for ray in f.sweeps[sweep]])
        ref_hdr = f.sweeps[sweep][0][4][b'REF'][0]
        ref_range = np.arange(ref_hdr.num_gates) * \
            ref_hdr.gate_width + ref_hdr.first_gate
        ref = np.array([ray[4][b'REF'][1] for ray in f.sweeps[sweep]])

        rho_hdr = f.sweeps[sweep][0][4][b'RHO'][0]
        rho_range = (np.arange(rho_hdr.num_gates) - 0.5) * \
            rho_hdr.gate_width + rho_hdr.first_gate
        rho = np.array([ray[4][b'RHO'][1] for ray in f.sweeps[sweep]])

        phi_hdr = f.sweeps[sweep][0][4][b'PHI'][0]
        phi_range = (np.arange(phi_hdr.num_gates) - 0.5) * \
            phi_hdr.gate_width + phi_hdr.first_gate
        phi = np.array([ray[4][b'PHI'][1] for ray in f.sweeps[sweep]])

        zdr_hdr = f.sweeps[sweep][0][4][b'ZDR'][0]
        zdr_range = (np.arange(zdr_hdr.num_gates) - 0.5) * \
            zdr_hdr.gate_width + zdr_hdr.first_gate
        zdr = np.array([ray[4][b'ZDR'][1] for ray in f.sweeps[sweep]])
        try:
            os.remove('out.gz')
            os.remove('out')
        except:
            pass
        print("File removed from local storage")
    except:
        return ("No data available",)
    return ref, rho, zdr, phi, ref_range, rho_range, zdr_range, phi_range, az, f.dt, obj.filename


def do_plot(start_date, radar_station, end_date):

    # Download and extract the meta data from the file
    out = download_file_from_s3(start_date, radar_station, end_date)
    # If file already exists in the database just return the URL.
    if len(out) == 1:
        print("Using existing image data")
        return out[0]
    else:
        ref, rho, zdr, phi, ref_range, rho_range, zdr_range, phi_range, az, dt, filename = out

    # Get the NWS reflectivity colortable from MetPy
    ref_norm, ref_cmap = ctables.registry.get_with_steps(
        'NWSReflectivity', 5, 5)

    # Plot the data!
    fig, axes = plt.subplots(2, 2, figsize=(15, 15))
    for var_data, var_range, colors, lbl, ax in zip((ref, rho, zdr, phi),
                                                    (ref_range, rho_range,
                                                     zdr_range, phi_range),
                                                    (ref_cmap, 'plasma',
                                                     'viridis', 'viridis'),
                                                    ('REF (dBZ)', 'RHO',
                                                     'ZDR (dBZ)', 'PHI'),
                                                    axes.flatten()):
        # Turn into an array, then mask
        data = np.ma.array(var_data)
        data[np.isnan(data)] = np.ma.masked

        # Convert az,range to x,y
        xlocs = var_range * np.sin(np.deg2rad(az[:, np.newaxis]))
        ylocs = var_range * np.cos(np.deg2rad(az[:, np.newaxis]))

        # Define norm for reflectivity
        norm = ref_norm if colors == ref_cmap else None

        # Plot the data
        a = ax.pcolormesh(xlocs, ylocs, data, cmap=colors, norm=norm)

        divider = make_axes_locatable(ax)
        cax = divider.append_axes('right', size='5%', pad=0.05)
        fig.colorbar(a, cax=cax, orientation='vertical', label=lbl)

        ax.set_aspect('equal', 'datalim')
        ax.set_xlim(-100, 100)
        ax.set_ylim(-100, 100)
        add_timestamp(ax, dt, y=0.02, high_contrast=False)

    plt.suptitle('KVWX Level 2 Data - {}'.format(radar_station), fontsize=20)
    plt.tight_layout()
    # Save the figure
    fig.savefig("download_data/output_plot/test.png")
    # Upload the data onto a free image hosting platform for easy access of the URL.
    obj = cloudinary.uploader.upload("download_data/output_plot/test.png")

    # Save data into the database, to avoid replotting the same thing again and again.
    try:
        obj1 = ImagePath(filename=filename, url=obj['url'])
        obj1.save()
    except:
        print("Object already exists")
        obj = ImagePath.objects.get(filename=obj.filename)
        return (obj.url,)

    return obj['url']


def sendDataRabbitMQService(start_date, radar_station):

    # TODO:
    # Ignoring start_date. As the free open weather API doesnot have access to historical data.

    # Connect to the rabbit MQ client
    weather_rpc = WeatherRpcClient()
    # get the desired radar station latitude and longitude from the csv file
    station = station_data[station_data['id'] == radar_station]
    if station.shape[0] == 0:
        return "No data available"
    station = station.iloc[0]
    latitude = station['latitude']
    longitude = station['longitude']

    # Save the data in a JSON file
    data = {"lat": latitude, "lon": longitude}
    data = json.dumps(data)

    # Send the data using the the Rabbit MQ client over the network
    response = weather_rpc.call(data)
    print(" [.] Got %r" % response)
    # Return the response to the view set.
    return response
