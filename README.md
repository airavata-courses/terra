This service does a simple weather prediction using the Openweather API using the radar station latitude and longitude. 

Before running the service make sure you run the data-retireval service first. The data retrieval service communicates to the forecasting service via the message queue.

Steps to run the weather forecast service.
1. Install docker.
2. cd `weather-forecasting-service`
3. Run the command `docker-compose up`

Sample API and response:

![image](https://user-images.githubusercontent.com/58596028/151396337-e1b362e4-123e-4ff0-88c4-cd23c9be9005.png)
