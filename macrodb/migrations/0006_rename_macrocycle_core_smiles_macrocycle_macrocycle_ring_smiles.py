# Generated by Django 3.2.23 on 2024-07-24 12:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('macrodb', '0005_auto_20240614_0712'),
    ]

    operations = [
        migrations.RenameField(
            model_name='macrocycle',
            old_name='Macrocycle_Core_smiles',
            new_name='Macrocycle_Ring_smiles',
        ),
    ]