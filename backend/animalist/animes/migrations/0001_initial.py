# Generated by Django 4.0.5 on 2022-06-19 23:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Genre',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Tipo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Anime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('episodes', models.IntegerField(null=True)),
                ('synopsis', models.TextField()),
                ('aired', models.IntegerField(null=True)),
                ('genre', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, related_name='animes', to='animes.genre')),
                ('tipo', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, related_name='animes', to='animes.tipo')),
            ],
        ),
    ]
