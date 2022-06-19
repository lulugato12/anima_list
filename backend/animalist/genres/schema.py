import graphene
from graphene_django import DjangoObjectType
from .models import Genre

class GenreType(DjangoObjectType):
    class Meta:
        model = Genre

class Query(graphene.ObjectType):
    genres = graphene.List(GenreType)

    def resolve_genres(self, info, **kwargs):
        return Genre.objects.all()
