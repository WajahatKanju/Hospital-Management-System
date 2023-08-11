from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()


class Student(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        limit_choices_to={"is_staff": False, "is_superuser": False},
    )
    ENROLLMENT_STATUS_CHOICES = [
        ("PART_TIME", "Part-Time"),
        ("FULL_TIME", "Full-Time"),
    ]
    enrollment_status = models.CharField(
        max_length=20, choices=ENROLLMENT_STATUS_CHOICES
    )
    program_of_study = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    GENDER_CHOICES = [
        ("MALE", "Male"),
        ("FEMALE", "Female"),
        ("OTHER", "Other"),
    ]
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    contact_number = models.CharField(
        max_length=15
    )  # Consider using PhoneNumberField

    health_conditions = models.TextField(blank=True)
    immunization_records = models.TextField(blank=True)
    background_check_passed = models.BooleanField()
    cpr_certification = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.username


class StudentManager(models.Manager):
    def create_student(
        self,
        user,
        enrollment_status,
        program_of_study,
        date_of_birth,
        gender,
        contact_number,
        **extra_fields,
    ):
        student = self.create(
            user=user,
            enrollment_status=enrollment_status,
            program_of_study=program_of_study,
            date_of_birth=date_of_birth,
            gender=gender,
            contact_number=contact_number,
            **extra_fields,
        )
        return student
