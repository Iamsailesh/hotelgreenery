from rest_framework import serializers
from gallery_app.models import Gallery

class GallerySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Gallery
        fields = ['image']