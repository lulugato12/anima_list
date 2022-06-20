import graphene
from graphene_django import DjangoObjectType
from .models import Anime, Tipo, Genre, Rating

class TipoType(DjangoObjectType):
    class Meta:
        model = Tipo

class GenreType(DjangoObjectType):
    class Meta:
        model = Genre

class AnimeType(DjangoObjectType):
    class Meta:
        model = Anime

class RatingType(DjangoObjectType):
    class Meta:
        model = Rating

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

    def mutate(self, info, title, genre_id, tipo_id, synopsis, episodes = None, aired = None):
        genre = Genre.objects.filter(id = genre_id).first()
        if not genre:
            raise Exception('invalid genre.')

        tipo = Tipo.objects.filter(id = tipo_id).first()
        if not tipo:
            raise Exception('invalid tipo.')

        anime = Anime(title = title, genre = genre, tipo = tipo, episodes = episodes, synopsis = synopsis, aired = aired)
        anime.save()

        return CreateAnime(anime = anime)

class CreateRating(graphene.Mutation):
    rating = graphene.Field(RatingType)

    class Arguments:
        anime_id = graphene.Int(required = True)
        value = graphene.Int(required = True)

    def mutate(self, info, anime_id, value):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('log in >:(.')

        anime = Anime.objects.filter(id = anime_id).first()
        rating = Rating(user = user, anime = anime, value = value)
        rating.save()

        return CreateRating(rating = rating)

class Mutation(graphene.ObjectType):
    create_tipo = CreateTipo.Field()
    create_genre = CreateGenre.Field()
    create_anime = CreateAnime.Field()
    create_rating = CreateRating.Field()

class Query(graphene.ObjectType):
    animes = graphene.List(AnimeType)
    tipos = graphene.List(TipoType)
    genres = graphene.List(GenreType)
    ratings = graphene.List(RatingType)

    def resolve_animes(self, info):
        return Anime.objects.all()

    def resolve_tipos(self, info):
        return Tipo.objects.all()

    def resolve_genres(self, info):
        return Genre.objects.all()

    def resolve_ratings(self, info):
        return Rating.objects.all()
