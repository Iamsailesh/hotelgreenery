# Generated by Django 4.2.4 on 2023-09-17 16:25

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('reservation_app', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reservation',
            old_name='customer_email',
            new_name='email',
        ),
        migrations.RenameField(
            model_name='reservation',
            old_name='customer_phn',
            new_name='room_type',
        ),
        migrations.RemoveField(
            model_name='reservation',
            name='customer_name',
        ),
        migrations.RemoveField(
            model_name='reservation',
            name='customer_requirement',
        ),
        migrations.AddField(
            model_name='reservation',
            name='check_in',
            field=models.DateField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='reservation',
            name='check_out',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]
