import "./Anime.css";
import React from 'react';
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_ANIMES = gql`
    query{
        animes{
            id
            title
            genre{
                name
            }
            tipo{
                name
            }
        }
    }
`;

export function AnimeInfo(){
    const { data, loading } = useQuery(
      QUERY_ANIMES, {
        pollInterval: 500 // refetch the result every 0.5 second
      }
    );
    
    // should handle loading status
    if (loading) return <p>Loading...</p>;
     
    return data.animes.map(({ id, title }) => (
      <div key={id}>
        <h1>
          Anime - {id}: {title}
        </h1>
      </div>
    ));
}