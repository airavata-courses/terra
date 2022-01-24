from fileinput import filename
from django.db import models

# Create your models here.

class ImagePath(models.Model):

    filename = models.CharField(max_length=500)
    url = models.CharField(max_length=500)
