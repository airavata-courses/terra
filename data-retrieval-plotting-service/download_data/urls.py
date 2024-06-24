from django.urls import path

from .views import DownloadDataViewSet, WeatherViewset, Meera2DataViewSet


urlpatterns = [
    path('data/v1', DownloadDataViewSet.as_view({
        'get': 'list'
    })),
    path('weather/', WeatherViewset.as_view({
        'get': 'list'
    })),
    path('data/v2', Meera2DataViewSet.as_view({
        'get': 'list'
    }))
]
