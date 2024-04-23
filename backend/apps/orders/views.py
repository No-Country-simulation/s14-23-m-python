from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import permission_classes
from .models import Order
from .serializers import OrderSerializer

from drf_yasg.utils import swagger_auto_schema


class OrderListCreateAPIView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class OrderDetailsAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


class UserOrderListAPIView(generics.ListAPIView):
    serializer_class = OrderSerializer

    @permission_classes([IsAdminUser(), IsAuthenticated()])
    @swagger_auto_schema(operation_description="Filter orders by authenticated user")
    def get_queryset(self):
        """
        Filter orders by user
        """
        # Get user authenticated
        user = self.request.user

        # Filter orders by current Authenticated user
        queryset = Order.objects.filter(user=user)
        return queryset
