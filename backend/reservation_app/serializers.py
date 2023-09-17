from rest_framework import serializers
from .models import Reservation

class ReservationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
        #('reservation_id', 'customer_name','customer_email','customer_phn','customer_requirement')