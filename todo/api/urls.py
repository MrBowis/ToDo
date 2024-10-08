from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'task', views.TaskViewSet)
router.register(r'group', views.GroupViewSet)

urlpatterns = [
    path('', include(router.urls))
]