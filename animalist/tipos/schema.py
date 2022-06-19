import graphene
from graphene_django import DjangoObjectType
from .models import Tipo

class TipoType(DjangoObjectType):
    class Meta:
        model = Tipo

class Query(graphene.ObjectType):
    tipos = graphene.List(TipoType)

    def resolve_tipos(self, info, **kwargs):
        return Tipo.objects.all()
