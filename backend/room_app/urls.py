from django.urls import path, include
from rest_framework import routers
from room_app.views import RoomViewset

router = routers.DefaultRouter()
router.register(r'Room', RoomViewset)

urlpatterns = [
    path('', include(router.urls)),
]

