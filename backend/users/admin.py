from django.contrib.auth.admin import UserAdmin
from django.contrib import admin
from .models import Role, CustomUser


admin.site.register(Role)


# Define a custom admin class for CustomUser
class CustomUserAdmin(UserAdmin):
    # Add any custom fields you want to display in the list view
    list_display = ["username", "email", "first_name", "last_name", "role"]
    readonly_fields = ("date_joined",)
    # Add any custom fields you want to include in the search
    search_fields = ["username", "email", "first_name", "last_name"]

    # If you want to filter the users based on certain fields
    list_filter = ["role"]

    # The order of the fields in the add form in the admin
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": (
                    ("username", "email"),
                    ("first_name", "last_name"),
                    ("password1", "password2"),
                    ("role", "is_staff", "is_active"),
                ),
            },
        ),
    )

    # fieldsets = (
    #     ("Personal info", {"fields": ("email", "username", "password")}),
    #     *fieldsets[1:],
    # )


# Register CustomUser with the custom admin class
admin.site.register(CustomUser, CustomUserAdmin)
