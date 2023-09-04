from django.db import models

# Create your models here.
class Room(models.Model):
    room_id= models.BigAutoField(primary_key=True)
    room_name= models.CharField(max_length=50)
    short_description= models.TextField()
    present_price= models.IntegerField()
    old_price= models.IntegerField()


    def __str__(self):
        return self.room_name