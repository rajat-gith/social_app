# Generated by Django 4.0.1 on 2022-07-02 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('src', '0002_remove_post_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='creator',
            field=models.CharField(default='user', max_length=20),
            preserve_default=False,
        ),
    ]
