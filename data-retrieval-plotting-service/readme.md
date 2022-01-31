This service downloads the data from nex rad dataset S3 bucket based on start date, end date and Radar station.

To run the service:
1. Install docker
2. Clone the project and go the service directory: `cd data-retrieval-plotting-service/`
3. Run the command `docker-compose up` to start the Django backend service.
![image](https://user-images.githubusercontent.com/58596028/150855215-6af8a72b-dd0d-4943-a5b8-8cebfbb15587.png)

Above is the sample API call:
`data/fetch?start_date=2019-05-29T19:20&station=KCLE&end_date=2019-06-27T20:21`
Notice that the end date is optional in the above query.

Under the hood:
1. Gets the parameters from the User. 
2. Fetches and downloads the closest radar file available. 
3. Uses Metpy to plot the data.
4. And finally saves the plot to cloudinary a image hosting cloud storage and returns the public image url.

TODO:
1. Currently one file is downloaded from the S3 bucket irrespective of how wide the start date or end date is.
2. Trigger a weather forecasting service based on the station latitude, station longitude, date time to understand what was the weather and temperature at that time.
