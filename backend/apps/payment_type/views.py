# from django.shortcuts import render
from rest_framework import viewsets
from .serializer import PaymentTypeSerializer
from .models import PaymentType

# Create your views here.


class PaymentTypeViewSet(viewsets.ModelViewSet):
    queryset = PaymentType.objects.all()
    serializer_class = PaymentTypeSerializer
