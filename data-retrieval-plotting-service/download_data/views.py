import json
from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import LinkSerializer, WeatherDataSerializer
from .plotting import download_file_from_s3, do_plot, sendDataRabbitMQService
from django.utils.dateparse import parse_date
import dateutil.parser
import datetime
from .merra2_plotting import download_plot_merra2

### Views start here ###


class DownloadDataViewSet(viewsets.ViewSet):
    """Viewset to return the plot based on the start date, end date and station """

    def list(self, request, *args, **kwargs):

        print("GET request is called")
        # Get the parameters from the request object
        data = request.GET
        # start date and station are required paramters
        if 'start_date' not in data or 'station' not in data:
            return Response("Invalid inputs - {} or {} missing".format('start_date', 'station'),
                            status=status.HTTP_400_BAD_REQUEST)

        # Convert to date time object
        start_date = dateutil.parser.parse(data['start_date'])

        radar_station = data['station']

        # If end date is None, create an end date with 10 mins ahead of start date
        if 'end_date' not in data or data['end_date'] == None:
            mins_added = datetime.timedelta(minutes=10)
            end_date = start_date + mins_added
        else:
            end_date = dateutil.parser.parse(data['end_date'])

        print(start_date, radar_station, end_date)
        # Call the plot function
        out = do_plot(start_date, radar_station, end_date)
        if out == 'No data available':
            return Response("No scans available for the selected inputs",
                            status=status.HTTP_200_OK)

        # Image is saved
        print("image is saved ", out)
        # Pass the data to serializer to pass it to the client
        serializer = LinkSerializer(data={'image_url': str(out)})
        serializer.is_valid()
        return Response(serializer.data, status=status.HTTP_200_OK)


class WeatherViewset(viewsets.ViewSet):
    """Viewset that creates a rabbitMQ client requests the rabbitMQ server for a temperature """

    def list(self, request, *args, **kwargs):
        print(" weather request is called")
        data = request.GET
        # start date and station are required paramters
        if 'start_date' not in data or 'station' not in data:
            return Response("Invalid inputs - {} or {} missing".format('start_date', 'station'),
                            status=status.HTTP_400_BAD_REQUEST)

        # Create a rabbitMQ client and call the rabbit MQ server
        out = sendDataRabbitMQService(data['start_date'], data['station'])
        if out == 'No data available':
            return Response("Not a valid radar station input",
                            status=status.HTTP_400_BAD_REQUEST)

        # returned object is a binary, decode the object
        out = out.decode()
        # And convert it back to json
        out = json.loads(out)
        # Pass the data to serializer
        serializer = WeatherDataSerializer(data=out)
        serializer.is_valid()
        return Response(serializer.data, status=status.HTTP_200_OK)


### Views start here ###
class Meera2DataViewSet(viewsets.ViewSet):
    """Viewset to return the plot based on the start date, end date and station """

    def list(self, request, *args, **kwargs):
        print("Meera-2 endpoint is called")
        data = request.GET
        if 'start_date' not in data:
            return Response("Invalid inputs - {} or {} missing".format('start_date'),
                            status=status.HTTP_400_BAD_REQUEST)
        print(data)
        out = download_plot_merra2(data['start_date'])
        serializer = LinkSerializer(data={'image_url': str(out)})
        serializer.is_valid()
        return Response(serializer.data, status=status.HTTP_200_OK)

        # return Response(f"Meera 2 data downloaded, plot is {out}", status=status.HTTP_200_OK)
