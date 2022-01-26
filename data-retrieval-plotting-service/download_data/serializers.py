from tkinter import Image
from rest_framework import serializers
from .models import ImagePath

class LinkSerializer(serializers.Serializer):
    image_url = serializers.CharField()


class ImagePathSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ImagePath
    fields = '__all__'

class WeatherDataSerializer(serializers.Serializer):

    temp_min = serializers.FloatField()
    temp_max = serializers.FloatField()
    pressure = serializers.IntegerField()
    humidity = serializers.IntegerField()
    weather = serializers.CharField()
    weather_description = serializers.CharField()
    
