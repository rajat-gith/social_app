# Generated by Django 3.2.1 on 2022-07-04 17:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('src', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='comment',
        ),
    ]
