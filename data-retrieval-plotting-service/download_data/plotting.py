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
import pika
import json
import cloudinary
import cloudinary.uploader
from .models import ImagePath
from django.core.exceptions import ObjectDoesNotExist

# Configuration for the cloudinary file upload
cloudinary.config( 
  cloud_name = "dekapnfya", 
  api_key = "693518538948276", 
  api_secret = "I_V74DpPwtkwj1yQk-Ib5aAPQyQ" 
)


# Ref: https://nexradaws.readthedocs.io/en/latest/apidocs.html
# https://unidata.github.io/MetPy/latest/examples/formats/NEXRAD_Level_2_File.html
def download_file_from_s3(start_date,radar_station, end_date,download=1):

    s3 = boto3.resource('s3', config=Config(signature_version=botocore.UNSIGNED,
                                            user_agent_extra='Resource'))
    # bucket = s3.Bucket('noaa-nexrad-level2')            
    conn = nexradaws.NexradAwsInterface()
    availScans = conn.get_avail_scans_in_range(start_date,end_date,radar_station)

    if download ==1:
        availScans = availScans[:1]
    
    
    for obj in availScans:    

        file_path = obj.awspath +'/'+ obj.filename 
        
        try:
            obj = ImagePath.objects.get(filename=obj.filename)
            return (obj.url,)
        except ObjectDoesNotExist:
            print("Download and start plotting")

        file_obj = s3.Object('noaa-nexrad-level2', file_path).get()['Body']

        # Use MetPy to read the file
        f = Level2File(file_obj)

        # TODO:
        # Currently only one iteration will be run.


    sweep = 0
    # First item in ray is header, which has azimuth angle
    az = np.array([ray[0].az_angle for ray in f.sweeps[sweep]])

    ref_hdr = f.sweeps[sweep][0][4][b'REF'][0]
    ref_range = np.arange(ref_hdr.num_gates) * ref_hdr.gate_width + ref_hdr.first_gate
    ref = np.array([ray[4][b'REF'][1] for ray in f.sweeps[sweep]])

    rho_hdr = f.sweeps[sweep][0][4][b'RHO'][0]
    rho_range = (np.arange(rho_hdr.num_gates ) - 0.5) * rho_hdr.gate_width + rho_hdr.first_gate
    rho = np.array([ray[4][b'RHO'][1] for ray in f.sweeps[sweep]])

    phi_hdr = f.sweeps[sweep][0][4][b'PHI'][0]
    phi_range = (np.arange(phi_hdr.num_gates ) - 0.5) * phi_hdr.gate_width + phi_hdr.first_gate
    phi = np.array([ray[4][b'PHI'][1] for ray in f.sweeps[sweep]])

    zdr_hdr = f.sweeps[sweep][0][4][b'ZDR'][0]
    zdr_range = (np.arange(zdr_hdr.num_gates ) - 0.5) * zdr_hdr.gate_width + zdr_hdr.first_gate
    zdr = np.array([ray[4][b'ZDR'][1] for ray in f.sweeps[sweep]])
    return ref, rho, zdr, phi, ref_range, rho_range, zdr_range, phi_range, az, f.dt,obj.filename 




def do_plot(start_date,radar_station, end_date):
    
    out = download_file_from_s3(start_date,radar_station, end_date)
    if len(out)==1:
        print("Using existing image data")
        return out[0]
    else:
        ref, rho, zdr, phi, ref_range, rho_range, zdr_range, phi_range, az, dt,filename = out

    
    # Get the NWS reflectivity colortable from MetPy
    ref_norm, ref_cmap = ctables.registry.get_with_steps('NWSReflectivity', 5, 5)

    # Plot the data!
    fig, axes = plt.subplots(2, 2, figsize=(15, 15))
    for var_data, var_range, colors, lbl, ax in zip((ref, rho, zdr, phi),
                                                    (ref_range, rho_range, zdr_range, phi_range),
                                                    (ref_cmap, 'plasma', 'viridis', 'viridis'),
                                                    ('REF (dBZ)', 'RHO', 'ZDR (dBZ)', 'PHI'),
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
    # plt.savefig('test.png')
    
    plt.suptitle('KVWX Level 2 Data', fontsize=20)
    plt.tight_layout()
    fig.savefig("download_data/output_plot/test.png")
    obj = cloudinary.uploader.upload("download_data/output_plot/test.png")

    # Save data into the database
    obj1 = ImagePath(filename=filename, url=obj['url'])
    
    obj1.save()
    # print(serializer.data)
    return obj['url']



def sendDataRabbitMQService():
    
    connection = pika.BlockingConnection(pika.ConnectionParameters(host = 'rabbitmq',port=5672))
    channel = connection.channel()
    channel.queue_declare(queue = 'hello')
    
    data = json.dumps('abc hello wassup in jsaaon')
    channel.basic_publish(exchange='',
                        routing_key='hello',
                        body=data)
    print(" [x] Sent 'Hello World!'") 

    connection.close() 