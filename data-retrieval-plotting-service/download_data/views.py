from rest_framework import viewsets, status
from rest_framework.response import Response
from .serializers import LinkSerializer

from .plotting import download_file_from_s3,do_plot, sendDataRabbitMQService
from django.utils.dateparse import parse_date
import dateutil.parser
import datetime
# Create your views here.


class DownloadDataViewSet(viewsets.ViewSet):

    def get_queryset(self):
        return None

    def list1(self, request,*args, **kwargs):
        sendDataRabbitMQService()
        return Response("Response sent to rabbit mq service",status=status.HTTP_200_OK)

    def list(self, request, *args, **kwargs):

        print("request is called")
        data = request.GET
        if 'start_date' not in data or 'station' not in data:
            return Response("Invalid inputs - {} or {} missing".format('start_date','station'),
            status=status.HTTP_400_BAD_REQUEST)
        

        start_date = dateutil.parser.parse(data['start_date'])        
        radar_station = data['station']

        if 'end_date' not in data or data['end_date'] == None:
            mins_added = datetime.timedelta(minutes = 10)
            end_date = start_date + mins_added
        else:
            end_date = dateutil.parser.parse(data['end_date'])  
        print(start_date,radar_station, end_date)
        # save_image()
        url = do_plot(start_date, radar_station,end_date)
        print("image is saved ",url)
        serializer = LinkSerializer(data = {'image_url':str(url)})
        out = serializer.is_valid()
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)






    