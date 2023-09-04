# Generated by Django 4.2.4 on 2023-09-04 03:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Testimonial',
            fields=[
                ('testimonial_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('testimonial_name', models.CharField(max_length=50)),
                ('testimonial_address', models.CharField(max_length=100)),
                ('testimonial_desc', models.TextField()),
            ],
        ),
    ]
