# Generated by Django 4.2.4 on 2023-09-16 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('room_app', '0002_room_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='image',
            field=models.ImageField(null=True, upload_to='room/'),
        ),
    ]