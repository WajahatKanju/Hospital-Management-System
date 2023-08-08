from django.urls import path
from .views import check_email_registered, check_username_registered

urlpatterns = [
    # ... other URL patterns
    path("check-email/", check_email_registered, name="check-email"),
    path("check-username/", check_username_registered, name="check-username"),
]
