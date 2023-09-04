from rest_framework import serializers
from room_app.models import Room

class RoomSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Room
        fields = ['room_id', 'room_name','short_description','present_price','old_price']