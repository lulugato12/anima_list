import graphene
from graphene_django import DjangoObjectType
from .models import Anime, Tipo, Genre, Lista

class TipoType(DjangoObjectType):
    class Meta:
        model = Tipo

class GenreType(DjangoObjectType):
    class Meta:
        model = Genre

class AnimeType(DjangoObjectType):
    class Meta:
        model = Anime

class ListaType(DjangoObjectType):
    class Meta:
        model = Lista

class CreateTipo(graphene.Mutation):
    tipo = graphene.Field(TipoType)

    class Arguments:
        name = graphene.String(required = True)

    def mutate(self, info, name):
        tipo = Tipo(name = name)
        tipo.save()

        return CreateTipo(tipo = tipo)

class CreateGenre(graphene.Mutation):
    genre = graphene.Field(GenreType)

    class Arguments:
        name = graphene.String(required = True)

    def mutate(self, info, name):
        genre = Genre(name = name)
        genre.save()

        return CreateGenre(genre = genre)

class CreateAnime(graphene.Mutation):
    anime = graphene.Field(AnimeType)

    class Arguments:
        title = graphene.String(required = True)
        genre_id = graphene.Int(required = True)
        tipo_id = graphene.Int(required = True)
        episodes = graphene.Int()
        synopsis = graphene.String(required = True)
        aired = graphene.Int()
        rating = graphene.Float(required = True)

    def mutate(self, info, title, genre_id, tipo_id, synopsis, rating, episodes = None, aired = None):
        genre = Genre.objects.filter(id = genre_id).first()
        if not genre:
            raise Exception('invalid genre.')

        tipo = Tipo.objects.filter(id = tipo_id).first()
        if not tipo:
            raise Exception('invalid tipo.')

        anime = Anime(title = title, genre = genre, tipo = tipo, episodes = episodes, synopsis = synopsis, aired = aired, rating = rating)
        anime.save()

        return CreateAnime(anime = anime)

class CreateLista(graphene.Mutation):
    lista = graphene.Field(ListaType)

    class Arguments:
        name = graphene.String(required = True)

    def mutate(self, info, name):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('log in >:(.')

        lista = Lista(user = user, name = name)
        lista.save()

        return CreateLista(lista = lista)

class AddAnime(graphene.Mutation):
    lista = graphene.Field(ListaType)

    class Arguments:
        anime_id = graphene.Int(required = True)
        lista_id = graphene.Int(required = True)

    def mutate(self, info, anime_id, lista_id):
        anime = Anime.objects.filter(id = anime_id).first()
        if not anime:
            raise Exception('invalid anime.')

        lista = Lista.objects.filter(id = lista_id).first()
        if not lista:
            raise Exception('invalid lista.')

        lista.animes.add(anime)

        return AddAnime(lista = lista)

class AddGenre(graphene.Mutation):
    anime = graphene.Field(AnimeType)

    class Arguments:
        anime_id = graphene.Int(required = True)
        genre_id = graphene.Int(required = True)

    def mutate(self, info, anime_id, genre_id):
        anime = Anime.objects.filter(id = anime_id).first()
        if not anime:
            raise Exception('invalid anime.')

        genre = Genre.objects.filter(id = genre_id).first()
        if not genre:
            raise Exception('invalid genre.')

        anime.genres.add(genre)

        return AddGenre(anime = anime)

class Mutation(graphene.ObjectType):
    create_tipo = CreateTipo.Field()
    create_genre = CreateGenre.Field()
    create_anime = CreateAnime.Field()
    create_lista = CreateLista.Field()
    add_anime = AddAnime.Field()
    add_genre = AddGenre.Field()

class Query(graphene.ObjectType):
    animes = graphene.List(AnimeType)
    tipos = graphene.List(TipoType)
    genres = graphene.List(GenreType)
    listas = graphene.List(ListaType)

    def resolve_animes(self, info):
        return Anime.objects.all()

    def resolve_tipos(self, info):
        return Tipo.objects.all()

    def resolve_genres(self, info):
        return Genre.objects.all()

    def resolve_listas(self, info):
        return Lista.objects.all()
