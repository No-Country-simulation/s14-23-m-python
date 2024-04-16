# Generated by Django 5.0.4 on 2024-04-16 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="customuser",
            name="address",
            field=models.TextField(default="", max_length=150, null=True),
        ),
        migrations.AlterField(
            model_name="customuser",
            name="lastName",
            field=models.CharField(default="", max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="customuser",
            name="name",
            field=models.CharField(default="", max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name="customuser",
            name="phone",
            field=models.CharField(default="", max_length=20, null=True),
        ),
    ]
