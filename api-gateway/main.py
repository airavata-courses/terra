from typing import Optional
# from urllib.request import Request
from fastapi import FastAPI, Request
import json
import requests
from fastapi.middleware.cors import CORSMiddleware
import pika
import redis
import time

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app = FastAPI()

PYTHON_HOST = 'dataretrieval'
PYTHON_PORT = '8000'
JAVA_HOST = 'service-sql'
JAVA_PORT = '8888'

headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'access-control-allow-credentials': 'true',
    'access-control-allow-headers': 'content-type'
}
r = redis.Redis(host='my-redis')

# For testing


@app.get('/test')
def get():
    return {"test": "API gateway is working!"}


@app.get('/')
def get():
    return "Welcome to Team terra API gateway!"

# API path for plotting


def connect_rabbitmq():

    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='rabbitmq'))
    channel = connection.channel()
    channel.queue_declare(queue='user-activity')
    return channel


channel = connect_rabbitmq()


@app.get("/plot/v1")
def read_root(start_date: Optional[str] = None, end_date: Optional[str] = None, station: Optional[str] = None,
              userId: Optional[str] = None, tokenId: Optional[str] = None):

    print("[In API gatway] - Calling Plot micro service - [Nex-Rad]")
    # print(" [RabbitMQ] Sent log details to user-activity queue'")
    params = {'start_date': start_date,
              'end_date': end_date, 'station': station}
    generate_url = f"http://{PYTHON_HOST}:{PYTHON_PORT}/fetch/data/v1"
    output = requests.get(generate_url, params=params)
    data = output.text

    data = json.loads(data)
    # if data == 'No scans available for the selected inputs':
    #     searchOutput = data
    # else:
    #     searchOutput = data['image_url']
    # # data = json.loads(data)
    # body = {
    #     "userId": userId, "tokenId": tokenId, "typeOfSearch": "Meera-2-plot",
    #     "searchParam": f"{station}"[:10], "searchOutput": searchOutput
    # }
    # body = json.dumps(body)
    # print(body)
    # time.sleep(0.2)
    # try:
    #     channel.basic_publish(exchange='',
    #                           routing_key='user-activity',
    #                           body=body)
    #     print(" [RabbitMQ] Sent log details to user-activity queue'")
    # except:
    #     channel = connect_rabbitmq()
    #     channel.basic_publish(exchange='',
    #                           routing_key='user-activity',
    #                           body=body)
    #     print(" [RabbitMQ] Sent log details to user-activity queue'")

    return data


# API path for meera-2 plotting


@app.get("/plot/v2")
def read_root(start_date: Optional[str] = None, end_date: Optional[str] = None, station: Optional[str] = None,
              userId: Optional[str] = None, tokenId: Optional[str] = None):

    print("[In API gatway] - Calling Plot micro service - [Merra]")
    # print(" [RabbitMQ] Sent log details to user-activity queue'")
    params = {'start_date': start_date,
              'end_date': end_date, 'station': station}
    generate_url = f"http://{PYTHON_HOST}:{PYTHON_PORT}/fetch/data/v2"
    output = requests.get(generate_url, params=params)
    data = output.text
    print(data)
    print(type(data))
    data = json.loads(data)
    # if data == 'No scans available for the selected inputs':
    #     searchOutput = data
    # else:
    #     searchOutput = data['image_url']
    # # data = json.loads(data)
    # body = {
    #     "userId": userId, "tokenId": tokenId, "typeOfSearch": "Meera-2-plot",
    #     "searchParam": f"{station}"[:10], "searchOutput": searchOutput
    # }
    # body = json.dumps(body)
    # print(body)
    # time.sleep(0.2)
    # try:
    #     channel.basic_publish(exchange='',
    #                           routing_key='user-activity',
    #                           body=body)
    #     print(" [RabbitMQ] Sent log details to user-activity queue'")
    # except:
    #     channel = connect_rabbitmq()
    #     channel.basic_publish(exchange='',
    #                           routing_key='user-activity',
    #                           body=body)
    #     print(" [RabbitMQ] Sent log details to user-activity queue'")

    return data

# Calls the weather api


@app.get("/weather")
def read_root(start_date: Optional[str] = None, end_date: Optional[str] = None, station: Optional[str] = None):

    print("[In API gatway] - Calling Weather micro service")

    params = {'start_date': start_date,
              'end_date': end_date, 'station': station}

    generate_url = f"http://{PYTHON_HOST}:{PYTHON_PORT}/fetch/weather"
    output = requests.get(generate_url, params=params, headers=headers)
    data = output.text
    data = json.loads(data)
    return data


@app.post('/user/data')
async def post_user_data(request: Request):

    print("[In API gatway] - Calling User data service")
    data = await request.json()
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/data"
    data = json.dumps(data)
    output = requests.post(generate_url, data=data, headers=headers)
    data = output.text
    data = json.loads(data)
    return data


@app.post('/user/log')
async def post_user_data(request: Request):

    print("[In API gatway] - Calling User log service")
    data = await request.json()
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/log"
    data = json.dumps(data)
    output = requests.post(generate_url, data=data, headers=headers)
    data = output.text
    data = json.loads(data)
    return data


@app.get('/user/activity')
async def read_root(userId: str):
    print("[In API gatway] - Calling User activity service")
    params = {'userId': userId}
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/activity"
    output = requests.get(generate_url, params=params)
    data = output.text
    data = json.loads(data)
    return data


@app.post('/user/activity')
async def post_user_data(request: Request):
    print("[In API gatway] - Calling User activity service")
    data = await request.json()
    data = json.dumps(data)
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/activity"

    output = requests.post(generate_url, data=data, headers=headers)
    data = output.text
    data = json.loads(data)
    return data


@app.post('/user/register')
async def post_user_data(request: Request):
    print("[In API gatway] - Calling User registery service")
    data = await request.json()

    data = json.dumps(data)
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/register"

    output = requests.post(generate_url, data=data, headers=headers)
    data = output.text
    data = json.loads(data)
    return data


@app.post('/user/authentication')
async def post_user_data(request: Request):
    print("[In API gatway] - Calling User authentication service")
    data = await request.json()

    data = json.dumps(data)
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/authentication"

    output = requests.post(generate_url, data=data, headers=headers)
    data = output.text
    data = json.loads(data)
    return data
