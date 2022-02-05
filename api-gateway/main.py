from typing import Optional
# from urllib.request import Request
from fastapi import FastAPI, Request

import json
import requests


app = FastAPI()

PYTHON_HOST = 'dataretrievalcontainer'
PYTHON_PORT = '8000'
JAVA_HOST = 'service-sql'
JAVA_PORT = '8888'

headers={
'Content-type':'application/json', 
'Accept':'application/json'
}


@app.get('/test')
def get():

    return {"test":"ttt"}

@app.get("/plot")
async def read_root(start_date:Optional[str] = None, end_date:Optional[str]=None, station: Optional[str] = None):
        
    params = {'start_date':start_date,'end_date':end_date,'station':station}
    generate_url = f"http://{PYTHON_HOST}:{PYTHON_PORT}/fetch/data"         
    output = requests.get(generate_url,params=params)    
    data = output.text
    data = json.loads(data)    
    return data
    

@app.get("/weather")
def read_root(start_date:Optional[str] = None, end_date:Optional[str]=None, station: Optional[str] = None):
    
    params = {'start_date':start_date,'end_date':end_date,'station':station}
    # PYTHON_HOST = 'localhost'
    generate_url = f"http://{PYTHON_HOST}:{PYTHON_PORT}/fetch/weather"            
    output = requests.get(generate_url,params=params,headers=headers)    
    data = output.text    
    data = json.loads(data)    
    return data


@app.post('/user/data')
async def post_user_data(request:Request):


    data = await request.json()

    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/data"

    data = json.dumps(data)    
    output = requests.post(generate_url,data = data,headers=headers)
    data = output.text
    data = json.loads(data)
    return data


@app.post('/user/log')
async def post_user_data(request:Request):
    
    data = await request.json()    
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/log"
    data = json.dumps(data)
    output = requests.post(generate_url,data = data, headers=headers)
    data = output.text
    data = json.loads(data)
    return data


@app.get('/user/activity')
async def read_root(userId:str):
    
    params = {'userId':userId}    
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/activity"        
    output = requests.get(generate_url,params=params)    
    data = output.text
    data = json.loads(data)    
    return data

@app.post('/user/activity')
async def post_user_data(request:Request):
    
    data = await request.json()
    
    data = json.dumps(data)
    generate_url = f"http://{JAVA_HOST}:{JAVA_PORT}/user/activity"
    
    output = requests.post(generate_url,data = data, headers=headers)
    data = output.text
    data = json.loads(data)
    return data