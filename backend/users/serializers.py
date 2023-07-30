from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model

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
