from django.urls import path
from .views import OrderListCreateAPIView, OrderDetailsAPIView, UserOrderListAPIView


urlpatterns = [
    path("orders/", OrderListCreateAPIView.as_view(), name="order-list-create"),
    path("orders/<int:pk>", OrderDetailsAPIView.as_view(), name="order-details"),
    path("users/orders/", UserOrderListAPIView.as_view(), name="user-order-list"),
]
