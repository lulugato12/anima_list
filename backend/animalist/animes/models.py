from django.db import models

class Tipo(models.Model):
    name = models.CharField(max_length = 20)

class Genre(models.Model):
    name = models.CharField(max_length = 30)

class Anime(models.Model):
    title = models.CharField(max_length = 50)
    genre = models.ForeignKey('Genre', on_delete=models.RESTRICT, related_name = 'animes')
    tipo = models.ForeignKey('Tipo', on_delete=models.RESTRICT, related_name = 'animes')
    episodes = models.IntegerField(null = True)
    synopsis = models.TextField()
    aired = models.IntegerField(null = True)
