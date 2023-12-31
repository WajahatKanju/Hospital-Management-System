from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import CustomUser as User


@api_view(["GET"])
def check_email_registered(request):
    email = request.GET.get("email")
    if email:
        try:
            User.objects.get(email=email)
            return Response({"email_registered": True})
        except User.DoesNotExist:
            return Response({"email_registered": False})
    else:
        return Response({"error": "Email parameter missing."})


@api_view(["GET"])
def check_username_registered(request):
    username = request.GET.get("username")
    if username:
        try:
            User.objects.get(username=username)
            return Response({"username_registered": True})
        except User.DoesNotExist:
            return Response({"username_registered": False})
    else:
        return Response({"error": "Username parameter missing."})
