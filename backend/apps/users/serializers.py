from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"
        # [
        #     'userID', 'email', 'userName',
        #     'password', 'name', 'lastName', 'address',
        #     'phone', 'Created_at'
        # ]
