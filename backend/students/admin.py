from django.contrib import admin
from .models import Student
from django.contrib.auth import get_user_model

User = get_user_model()


class StudentAdmin(admin.ModelAdmin):
    list_display = [
        "user",
        "enrollment_status",
        "program_of_study",
    ]  # Add other fields you want to display in the list

    def save_model(self, request, obj, form, change):
        if not obj.user_id:
            # Auto-generate username and password
            username = f"student_{obj.pk}"  # You can customize this
            password = User.objects.make_random_password()

            user = User.objects.create_user(
                username=username, password=password
            )
            obj.user = user

        super().save_model(request, obj, form, change)


admin.site.register(Student, StudentAdmin)
