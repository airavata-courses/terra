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

FROM python:3.9
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY . /app


