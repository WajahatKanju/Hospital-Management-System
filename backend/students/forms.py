from django import forms
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSelectionFormField(forms.ModelChoiceField):
    def label_from_instance(self, user):
        return user.username  # Customize the display label as needed

    def queryset(self):
        return User.objects.filter(is_staff=False, is_superuser=False)
