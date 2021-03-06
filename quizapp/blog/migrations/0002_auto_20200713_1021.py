# Generated by Django 3.0.8 on 2020-07-13 10:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='name',
            new_name='author',
        ),
        migrations.RenameField(
            model_name='blog',
            old_name='blog',
            new_name='body',
        ),
        migrations.RenameField(
            model_name='blog',
            old_name='pub_date',
            new_name='datestamp',
        ),
        migrations.RenameField(
            model_name='blog',
            old_name='topic',
            new_name='title',
        ),
        migrations.RemoveField(
            model_name='blog',
            name='email',
        ),
        migrations.AddField(
            model_name='blog',
            name='category',
            field=models.CharField(default='General', max_length=100),
        ),
    ]
