from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    role = models.OneToOneField(
        "user.Role",
        verbose_name="user role",
        on_delete=models.CASCADE,
        null=True,
    )

    def __str__(self):
        return self.username

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"


class Role(models.Model):
    role = models.CharField(
        max_length=100, unique=True, verbose_name="User Role"
    )

    class Meta:
        verbose_name = "User Role"
        verbose_name_plural = "User Roles"

    def __str__(self):
        return self.role
