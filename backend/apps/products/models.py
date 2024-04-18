from django.core.files.uploadedfile import UploadedFile
from django.db import models
from apps.category.models import Category
from apps.users.models import CustomUser
from cloudinary.uploader import upload
from cloudinary.models import CloudinaryField
from django.core.exceptions import ValidationError


# max size file
FILE_UPLOAD_MAX_SIZE = 1024 * 1024 * 10  # 10mb


# Validation file method
def img_file_validation(file):
    if not file:
        raise ValidationError("No file selected.")

    if isinstance(file, UploadedFile):
        if file.size > FILE_UPLOAD_MAX_SIZE:
            raise ValidationError("File shouldn't be larger than 10MB.")


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
    images_url = CloudinaryField("image", validators=[img_file_validation])
    created_at = models.DateField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if self.pk is None and self.images_url:
            file_name = self.images_url.name.split(".")[0].lower().replace(" ", "-")

            # upload to cloudinary
            image_response = upload(
                self.images_url,
                use_filename=True,
                folder="gardenshareapp/",
                resource_type="image",
            )
            self.images_url = image_response["secure_url"]  # save secure url
        super().save(*args, **kwargs)
