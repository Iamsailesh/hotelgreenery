from django.shortcuts import render
from rest_framework import viewsets
from room_app.models import Room
from room_app.serializers import RoomSerializer
# Create your views here.
class RoomViewset(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer