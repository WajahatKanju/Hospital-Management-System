# Generated by Django 4.2.4 on 2023-08-09 08:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('enrollment_status', models.CharField(choices=[('PART_TIME', 'Part-Time'), ('FULL_TIME', 'Full-Time')], max_length=20)),
                ('program_of_study', models.CharField(max_length=100)),
                ('date_of_birth', models.DateField()),
                ('gender', models.CharField(choices=[('MALE', 'Male'), ('FEMALE', 'Female'), ('OTHER', 'Other')], max_length=10)),
                ('contact_number', models.CharField(max_length=15)),
                ('health_conditions', models.TextField(blank=True)),
                ('immunization_records', models.TextField(blank=True)),
                ('background_check_passed', models.BooleanField()),
                ('cpr_certification', models.BooleanField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
