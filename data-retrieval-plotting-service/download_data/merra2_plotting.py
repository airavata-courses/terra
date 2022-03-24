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

warnings.filterwarnings("ignore")

# Configuration for the cloudinary file upload
cloudinary.config(
    cloud_name="dekapnfya",
    api_key="693518538948276",
    api_secret="I_V74DpPwtkwj1yQk-Ib5aAPQyQ"
)


def download_plot_merra2(date):

    print("Downloading data")
    url = "https://goldsmr4.gesdisc.eosdis.nasa.gov/data/MERRA2_MONTHLY/M2TMNXSLV.5.12.4/2011/MERRA2_400.tavgM_2d_slv_Nx.201101.nc4"
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
    plt.title('MERRA-2 Air Temperature at 2m, January 2010', size=14)
    cb = plt.colorbar(ax=ax, orientation="vertical",
                      pad=0.02, aspect=16, shrink=0.8)
    cb.set_label('K', size=12, rotation=0, labelpad=15)
    cb.ax.tick_params(labelsize=10)
    plt.savefig(
        'download_data/merra_data/output.png')
    obj = cloudinary.uploader.upload(
        "download_data/merra_data/output.png")
    return obj['url']

# download_plot_merra2('a')
