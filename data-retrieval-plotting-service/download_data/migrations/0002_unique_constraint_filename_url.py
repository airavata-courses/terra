# Generated by Django 3.1.3 on 2022-03-01 05:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('download_data', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='imagepath',
            unique_together={('filename',)},
        ),
    ]
