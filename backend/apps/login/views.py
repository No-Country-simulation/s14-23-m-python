from django.contrib.auth import authenticate, login
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.hashers import check_password

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from django.views.decorators.csrf import csrf_exempt


class LoginAPIView(APIView):

    @swagger_auto_schema(
        operation_description="Log in of user",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=["email", "password"],
            properties={
                "email": openapi.Schema(
                    type=openapi.TYPE_STRING, description="User email"
                ),
                "password": openapi.Schema(
                    type=openapi.TYPE_STRING, description="Password user"
                ),
            },
        ),
        responses={200: "Success", 401: "Unauthorized"},
    )
    @csrf_exempt  # Add this line to deactivate the CSRF verification for this view
    def post(self, request, *args, **kwargs):

        email = request.data.get("email")
        password = request.data.get("password")

        user = authenticate(email=email, password=password)
        # print("USER", user) None
        if user:
            # check password
            if check_password(password, user.password):
                login(request, user)
                token, _ = Token.objects.get_or_create(user=user)
                return Response({"token": token.key})
            else:
                return Response(
                    {"error": "Invalid credentials"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
        else:
            return Response(
                {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )
