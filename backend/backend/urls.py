from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('room_app.urls')),
    path('desc/', include('aminities_app.urls')),
    path('testimonial/', include('testimonial_app.urls')),
    path('gallery/', include('gallery_app.urls'))
]
