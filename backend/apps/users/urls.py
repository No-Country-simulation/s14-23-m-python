from django.urls import path
from .views import UserListCreateAPIView, UserDetailsAPIView

urlpatterns = [
    path("users/", UserListCreateAPIView.as_view(), name="user-list-create"),
    path("users/<int:pk>/", UserDetailsAPIView.as_view(), name="user-details"),
]
