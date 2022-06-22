from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

import numpy as np
import pandas as pd
import itertools
import collections
from sklearn.metrics import jaccard_score

app = FastAPI()

# Preprocessing
animes = pd.read_csv('AnimeList.csv')
animes['genre'] = animes['genre'].fillna('None')
animes['genre'] = animes['genre'].apply(lambda x: x.split(', '))

genre_data = itertools.chain(*animes['genre'].values.tolist())
genre_counter = collections.Counter(genre_data)
genres = pd.DataFrame.from_dict(genre_counter, orient='index').reset_index().rename(columns={'index':'genre', 0:'count'})
genres.sort_values('count', ascending=False, inplace=True)

genre_map = {genre: idx for idx, genre in enumerate(genre_counter.keys())}
def extract_feature(genre):
    feature = np.zeros(len(genre_map.keys()), dtype=int)
    feature[[genre_map[idx] for idx in genre]] += 1
    return feature

anime_feature = pd.concat([animes['title'], animes['genre']], axis=1)
anime_feature['genre'] = anime_feature['genre'].apply(lambda x: extract_feature(x))

@app.get("/{id}")
def read_root(id: int):
    test_data = anime_feature.take([id])
    output = None
    for row in test_data.iterrows():
        search = anime_feature.drop([row[0]])
        search['result'] =  search['genre'].apply(lambda x: jaccard_score(row[1]['genre'], x))
        search_result = search.sort_values('result', ascending=False)['title'].head(10)
        indexes = search_result.index.tolist()
        output = jsonable_encoder(indexes)

    return JSONResponse(content=output)
