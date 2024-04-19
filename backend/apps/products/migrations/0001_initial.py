# Generated by Django 5.0.4 on 2024-04-18 15:22

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("category", "0001_initial"),
        ("users", "0002_alter_customuser_address_alter_customuser_lastname_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="Product",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=50)),
                ("size", models.CharField(max_length=50)),
                ("native_place", models.TextField(null=True)),
                ("location", models.TextField(null=True)),
                ("toxicity", models.TextField(null=True)),
                ("light_quantity", models.PositiveSmallIntegerField(null=True)),
                ("watering", models.PositiveSmallIntegerField(null=True)),
                ("additional_data", models.TextField(null=True)),
                ("price", models.FloatField(default=0.0)),
                ("images_url", models.TextField()),
                ("created_at", models.DateField(auto_now_add=True)),
                (
                    "category_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="category.category",
                    ),
                ),
                (
                    "user_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="users.customuser",
                    ),
                ),
            ],
        ),
    ]
