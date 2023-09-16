from django.db import models

# Create your models here.
class Reservation(models.Model):
    reservation_id = models.AutoField(primary_key=True)
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField()
    customer_phn =  models.CharField(max_length=20)
    customer_requirement = models.TextField()
