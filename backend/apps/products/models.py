from django.db import models
from apps.category.models import Category
from apps.users.models import CustomUser

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50)
    category_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    size = models.CharField(max_length=50)
    native_place = models.TextField(null=True)
    location = models.TextField(null=True)
    toxicity = models.TextField(null=True)
    light_quantity = models.PositiveSmallIntegerField(null=True)
    watering = models.PositiveSmallIntegerField(null=True)
    additional_data = models.TextField(null=True)
    price = models.FloatField(default=0.0)
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    images_url = models.TextField()
    created_at = models.DateField(auto_now_add=True)
