# users/tests.py
from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Role


class CustomUserTests(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username="testuser",
            email="test@example.com",
            password="testpassword",
            first_name="John",
            last_name="Doe",
        )
        self.role = Role.objects.create(role="Admin")
        self.user.role = self.role
        self.user.save()

    def test_custom_user_fields(self):
        user = get_user_model().objects.get(username="testuser")
        self.assertEqual(user.username, "testuser")
        self.assertEqual(user.email, "test@example.com")
        self.assertEqual(user.first_name, "John")
        self.assertEqual(user.last_name, "Doe")
        self.assertEqual(user.role, self.role)

    def test_custom_user_str_method(self):
        user = get_user_model().objects.get(username="testuser")
        self.assertEqual(str(user), "testuser")

    def test_superuser_creation(self):
        User = get_user_model()
        superuser = User.objects.create_superuser(
            username="admin",
            email="admin@example.com",
            password="adminpassword",
            first_name="Admin",
            last_name="User",
        )
        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)

    def test_user_creation_without_email(self):
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user(
                username="noemailuser",
                email=None,
                password="password123",
                first_name="No",
                last_name="Email",
            )
