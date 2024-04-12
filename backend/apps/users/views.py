from rest_framework import generics
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.decorators import permission_classes, parser_classes
from .models import CustomUser
from .serializers import UserSerializer

from drf_yasg.utils import swagger_auto_schema


class UserListCreateAPIView(generics.ListCreateAPIView):
    """
    - GET: All users in the app
    - POST: Create a user
    """

    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer  # (queryset, many=True)

    @permission_classes(IsAdminUser())
    @swagger_auto_schema(operation_description="Retrieve a list of all users")
    def get(self, request, *args, **kwargs):
        """
        Get all users
        """
        return super().get(request, *args, **kwargs)

    @swagger_auto_schema(operation_description="Create a new user")
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class UserDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    """
    GET: Retrieve details of a specific user.
    PUT: Update details of a specific user.
    DELETE: Delete a specific user.
    """

    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer

    @permission_classes([IsAdminUser(), IsAuthenticated()])
    @swagger_auto_schema(operation_description="Retrieve details of a specific user")
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    @permission_classes([IsAdminUser(), IsAuthenticated()])
    @swagger_auto_schema(operation_description="Update details of a specific user")
    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)

    @permission_classes(IsAdminUser())
    @swagger_auto_schema(operation_description="Delete a specific user")
    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)
