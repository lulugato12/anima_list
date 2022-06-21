from django.db import models
from django.conf import settings

class Tipo(models.Model):
    name = models.CharField(max_length = 20)

class Genre(models.Model):
    name = models.CharField(max_length = 30)

class Anime(models.Model):
    title = models.CharField(max_length = 50)
    genres = models.ManyToManyField('Genre', related_name = 'animes')
    tipo = models.ForeignKey('Tipo', on_delete=models.RESTRICT, related_name = 'animes')
    episodes = models.IntegerField(null = True)
    synopsis = models.TextField()
    aired = models.IntegerField(null = True)
    rating = models.FloatField()

class Lista(models.Model):
    name = models.CharField(max_length = 30)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete = models.CASCADE, related_name = 'listas')
    animes = models.ManyToManyField('Anime', related_name = 'listas')
