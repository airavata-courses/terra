from django.urls import path

from .views import DownloadDataViewSet, WeatherViewset


urlpatterns = [
    path('data/', DownloadDataViewSet.as_view({
        'get':'list'
    })),
    path('weather/',WeatherViewset.as_view({
        'get':'list'
    }))
]