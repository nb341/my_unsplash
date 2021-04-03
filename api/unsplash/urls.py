from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'api', views.UnsplashViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('unsplash/', include(router.urls)),
    path('', views.index, name="index")
]
