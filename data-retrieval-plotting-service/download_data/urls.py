from django.urls import path

from .views import DownloadDataViewSet


urlpatterns = [
    path('fetch/', DownloadDataViewSet.as_view({
        'get':'list'
    }))
]