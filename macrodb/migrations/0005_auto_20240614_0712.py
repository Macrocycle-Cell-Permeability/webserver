# Generated by Django 3.2.23 on 2024-06-14 07:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('macrodb', '0004_auto_20240614_0711'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='macrocycle',
            name='Net_Charge',
        ),
        migrations.RemoveField(
            model_name='macrocycle',
            name='Num_Charged_Atoms',
        ),
    ]