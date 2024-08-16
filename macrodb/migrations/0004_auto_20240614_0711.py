# Generated by Django 3.2.23 on 2024-06-14 07:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('macrodb', '0003_auto_20240402_0856'),
    ]

    operations = [
        migrations.RenameField(
            model_name='macrocycle',
            old_name='Macrocycle_Free_Amide_Ratio',
            new_name='Amide_Ratio',
        ),
        migrations.RenameField(
            model_name='macrocycle',
            old_name='Macrocycle_Overall_Amide_Ratio',
            new_name='Free_Amide_Ratio',
        ),
        migrations.RemoveField(
            model_name='macrocycle',
            name='No_symbol_Value',
        ),
    ]