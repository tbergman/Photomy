# Generated by Django 2.0.4 on 2018-06-07 13:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0002_image_lqip_upload'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
