# Generated by Django 2.0.4 on 2018-06-22 13:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_avatar'),
        ('gallery', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.OneToOneField(
                null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='avatar_user', to='gallery.Image'),
        ),
    ]
