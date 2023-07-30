from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "password",
        )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Make first_name and last_name required
        self.fields["first_name"].required = True
        self.fields["last_name"].required = True


class UserCreateSerializerTest(APITestCase):
    def setUp(self):
        self.registration_url = reverse(
            "user-list"
        )  # Replace "user-list" with your Djoser registration endpoint URL
        self.valid_payload = {
            "username": "testuser",
            "first_name": "John",
            "last_name": "Doe",
            "email": "test@example.com",
            "password": "testpassword",
        }
        self.invalid_payload = {
            "username": "testuser2",
            "email": "test@example.com",
            "password": "testpassword",
        }

    def test_valid_user_registration(self):
        response = self.client.post(
            self.registration_url, self.valid_payload, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        user = User.objects.get(username=self.valid_payload["username"])
        self.assertEqual(user.email, self.valid_payload["email"])
        self.assertEqual(user.first_name, self.valid_payload["first_name"])
        self.assertEqual(user.last_name, self.valid_payload["last_name"])

    def test_invalid_user_registration(self):
        response = self.client.post(
            self.registration_url, self.invalid_payload, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
