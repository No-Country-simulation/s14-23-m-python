from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    Group,
    Permission,
    PermissionsMixin,
)
from django.contrib.auth.hashers import make_password


# Superuser creation
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("e-mail is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        if password:
            user.password = make_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):

        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        # Check extra_fields setup
        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser will have is_staff=true")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser will have is_superuser=true")

        return self.create_user(email, password, **extra_fields)


# User
class CustomUser(AbstractBaseUser, PermissionsMixin):

    userID = models.AutoField(primary_key=True)
    userName = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    name = models.CharField(max_length=150)
    lastName = models.CharField(max_length=150)
    address = models.TextField()
    phone = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

    # fields required by AbstractBaseUser
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["userName", "name", "lastName", "address", "phone"]

    """
    Adding related_name='custom_user_set' to the groups and user_permissions relation fields in the User model,
    to avoid conflicts of reverse accessor names.
    """
    groups = models.ManyToManyField(
        Group,
        verbose_name="groups",
        blank=True,
        related_name="custom_user_groups",  # Nombre de acceso inverso personalizado
    )

    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name="user permissions",
        blank=True,
        related_name="custom_user_set",
    )

    def __str__(self):
        return self.userName
