from django.db import models

class Tipo(models.Model):
    name = models.CharField(max_length = 20)
