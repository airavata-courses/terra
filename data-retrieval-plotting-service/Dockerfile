# FROM continuumio/anaconda3

# RUN apt-get update && apt-get install -y libgtk2.0-dev && \
#     rm -rf /var/lib/apt/lists/*

# RUN /opt/conda/bin/conda update -n base -c defaults conda && \
#     /opt/conda/bin/conda install python=3.6 && \
#     /opt/conda/bin/conda install anaconda-client 

# RUN pip install -r requirements.txt

# RUN conda install cartropy

# # FROM python:3.9
# # ENV PYTHONUNBUFFERED 1
# # WORKDIR /app
# # COPY requirements.txt /app/requirements.txt
# # RUN pip install -r requirements.txt
# # COPY . /app
# FROM continuumio/miniconda3
# RUN conda install -c conda-forge cartopy

# FROM python:3.9
# ENV PYTHONUNBUFFERED 1
# WORKDIR /app
# COPY requirements.txt /app/requirements.txt
# RUN pip install -r requirements.txt
# COPY . /app
# # RUN python manage.py runserver 0.0.0.0:8000
# CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]

# FROM continuumio/miniconda3
# WORKDIR /app
# COPY environment.yml .
# RUN conda env create -f environment.yml
# RUN conda install -c conda-forge cartopy
# # RUN pip install cloudinary
# # RUN pip install nexradaws
# # RUN pip install django-mysql==3.9

# SHELL ["conda", "run", "-n", "for_plotting", "/bin/bash", "-c"]
# RUN echo "Make sure flask is installed:"
# RUN python -c "import numpy"


# COPY . .
# EXPOSE 8000
# CMD ["conda", "run", "-n", "for_plotting", \
#             "python3", "manage.py", \
#             "runserver", "0.0.0.0:8000"]


# # not using `python-cartopy` package as it doesn't include all build dependencies
# !apt-get install libproj-dev proj-bin proj-data
# !apt-get install libgeos-dev

# # shapely needs to be reinstalled to use the same geos install as cartopy (https://github.com/SciTools/cartopy/issues/871)
# !pip uninstall -y shapely
# !pip install --no-binary shapely shapely
# !pip install cartopy


FROM python:3.9
ENV PYTHONUNBUFFERED 1
WORKDIR /app

COPY requirements.txt /app/requirements.txt
# Download latest listing of available packages:
RUN apt-get -y update
ARG login=na
ARG password=na
# Upgrade already installed packages:
RUN apt-get -y upgrade
RUN apt-get install -y libproj-dev proj-bin proj-data
RUN apt-get install -y libgeos-dev python3-dev 
RUN pip uninstall -y shapely
RUN pip install --no-binary shapely shapely
RUN pip install cartopy==0.19.0.post1
RUN pip install -r requirements.txt
RUN touch $HOME/.netrc 
RUN echo "machine urs.earthdata.nasa.gov login $login password $password" >> $HOME/.netrc
# RUN echo "machine urs.earthdata.nasa.gov login $login password $password" >> $HOME/.netrc
RUN chmod 0600 $HOME/.netrc
RUN touch $HOME/.urs_cookies
RUN apt-get install -y wget
COPY . /app
# RUN python manage.py runserver 0.0.0.0:8000
CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]