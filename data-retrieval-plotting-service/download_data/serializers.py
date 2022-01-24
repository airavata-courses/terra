from tkinter import Image
from rest_framework import serializers
from .models import ImagePath

class LinkSerializer(serializers.Serializer):
    image_url = serializers.CharField()


class ImagePathSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ImagePath
    fields = '__all__'