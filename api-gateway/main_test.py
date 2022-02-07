from fastapi import FastAPI
from fastapi.testclient import TestClient

from main import app



client = TestClient(app)


def test_app_working():
    response = client.get("/test")
    assert response.status_code == 200
    assert response.json() == {"check":"home"}
    
def test_plot():    
    response = client.get("/plot?start_date=2019-06-30T10:20&station=KCLE")
    assert response.status_code == 200
    assert response.json() == {
    "image_url": "http://res.cloudinary.com/dekapnfya/image/upload/v1643169183/z573fms4tatxekd4ftpp.png"
}

def test_user_service():  
    body = {
        "name": "test",
        "email" : "test@sakshi.com"
    }  
    response = client.post("/user/data",json=body)
    assert response.status_code == 200

