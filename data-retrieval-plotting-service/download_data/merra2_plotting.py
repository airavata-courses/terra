import subprocess
import numpy as np
from netCDF4 import Dataset
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
import os
import cloudinary
import cloudinary.uploader
import warnings
from datetime import datetime
from .models import ImagePath
from django.core.exceptions import ObjectDoesNotExist

warnings.filterwarnings("ignore")

# Configuration for the cloudinary file upload
# print(os.environ)
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


SERVER = 'goldsmr4.gesdisc.eosdis.nasa.gov'
PATH = 'data/MERRA2_MONTHLY/M2TMNXSLV.5.12.4'
FILE = 'MERRA2_400.tavgM_2d_slv_Nx'


def download_plot_merra2(date):

    dt = datetime.strptime(date, "%Y-%m-%dT%H:%M")
    year = dt.year
    month = str(dt.month).zfill(2)
    assimilation = 0
    if year > 2010:
        assimilation = 400
    elif 2000 < year <= 2010:
        assimilation = 300
    elif 1990 < year <= 2000:
        assimilation = 200

    FILE = f'MERRA2_{assimilation}.tavgM_2d_slv_Nx'
    print("Downloading data from URL")
    # url = "https://goldsmr4.gesdisc.eosdis.nasa.gov/data/MERRA2_MONTHLY/M2TMNXSLV.5.12.4/2011/MERRA2_400.tavgM_2d_slv_Nx.201101.nc4"
    url = f"https://{SERVER}/{PATH}/{year}/{FILE}.{year}{month}.nc4"
    print(url)
    try:
        # If the query is already run, simply return the cloudinary URL.
        obj = ImagePath.objects.get(filename=url)
        print("Plot already exists for the data,  return the URL from the database")
        return (obj.url)
    except ObjectDoesNotExist:
        print("Download and start plotting")

    start = datetime.now()
    os.system(
        f"wget --quiet -O download_data/merra_data/out.nc4 --load-cookies ~/.urs_cookies --save-cookies ~/.urs_cookies --keep-session-cookies {url}")
    end = datetime.now()

    print(f"Data downloaded it took {end-start} seconds to download data")
    print("Starting plot")
    # list_files = subprocess.run(["wget", '-nv', '-P', ' data-retrieval-plotting-service/download_data/merra_data/out.nc4', '--load-cookies', '$HOME/.urs_cookies', '--save-cookies', '$HOME/.urs_cookies',
    #                             '--keep-session-cookies', 'https://goldsmr4.gesdisc.eosdis.nasa.gov/data/MERRA2_MONTHLY/M2TMNXSLV.5.12.4/2010/MERRA2_300.tavgM_2d_slv_Nx.201001.nc4'])
    # print("The exit code was: %d" % list_files.returncode)

    data = Dataset(
        'download_data/merra_data/out.nc4', mode='r')
    lons = data.variables['lon'][:]
    lats = data.variables['lat'][:]
    T2M = data.variables['T2M'][:, :, :]
    T2M = T2M[0, :, :]

    # Set the figure size, projection, and extent
    fig = plt.figure(figsize=(8, 4))
    ax = plt.axes(projection=ccrs.Robinson())
    ax.set_global()
    ax.coastlines(resolution="110m", linewidth=1)
    ax.gridlines(linestyle='--', color='black')

    # Set contour levels, then draw the plot and a colorbar
    clevs = np.arange(230, 311, 5)
    plt.contourf(lons, lats, T2M, clevs,
                 transform=ccrs.PlateCarree(), cmap=plt.cm.jet)
    plt.title(
        f'MERRA-2 Air Temperature at 2m, { dt.strftime("%B")} {year}', size=14)
    cb = plt.colorbar(ax=ax, orientation="vertical",
                      pad=0.02, aspect=16, shrink=0.8)
    cb.set_label('K', size=12, rotation=0, labelpad=15)
    cb.ax.tick_params(labelsize=10)
    plt.savefig(
        'download_data/merra_data/output.png')
    obj = cloudinary.uploader.upload(
        "download_data/merra_data/output.png")

    # Save data into the database, to avoid replotting the same thing again and again.
    try:
        os.remove('download_data/merra_data/out.nc4')
        os.remove('download_data/merra_data/output.png')
    except:
        pass
    print("File removed from local storage")

    try:
        obj1 = ImagePath(filename=url, url=obj['url'])
        obj1.save()
    except:
        print("Object already exists")
        obj = ImagePath.objects.get(filename=url)
        return obj.url

    return obj['url']
