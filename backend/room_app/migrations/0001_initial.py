# Generated by Django 4.2.4 on 2023-09-04 15:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('room_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('room_name', models.CharField(max_length=50)),
                ('short_description', models.TextField()),
                ('present_price', models.IntegerField()),
                ('old_price', models.IntegerField()),
            ],
        ),
    ]
