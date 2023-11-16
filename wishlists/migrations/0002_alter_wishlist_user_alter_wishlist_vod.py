# Generated by Django 4.2.6 on 2023-11-15 05:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('contents', '0002_vod_bigcategory_vod_smallcategory_alter_vod_actors_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('wishlists', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wishlist',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='wishlist',
            name='vod',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vod', to='contents.vod'),
        ),
    ]
