from django.db import models
from apps.users.models import CustomUser
from apps.products.models import Product


class Order(models.Model):
    user = models.ForeignKey(
        CustomUser, on_delete=models.CASCADE, related_name="orders"
    )
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="orders"
    )
    quantity = models.IntegerField(default=0)
    total = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    is_paid = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        """
        Calculate total before save the object
        """
        self.total = self.quantity * self.product.price
        super().save(*args, **kwargs)

    def __str__(self):
        return f"""Order for {self.user.userName}, Product: {self.product.name},
      Quantity: {self.quantity}, Total: {self.total}"""
