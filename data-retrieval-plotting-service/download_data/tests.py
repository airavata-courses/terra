# Create your tests here.
from django.test import TestCase
from .models import ImagePath
# Create your tests here.

class ImagePathTestCase(TestCase): 
    
    def setUp(self):
        obj1 = ImagePath(filename='f', url='url')
        obj1.save()
    
    def test_object_is_created(self):
        """Image path object creation is successful"""
        obj = ImagePath.objects.get(filename="f")                
        self.assertEqual(obj.url, 'url')

