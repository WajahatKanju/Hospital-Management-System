from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("apiv1/", include("apiV1.urls")),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("", views.index, name="index"),
]


urlpatterns += [
    re_path(r"^.*", TemplateView.as_view(template_name="index.html"))
]
