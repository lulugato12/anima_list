import React from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_TIPOS = gql`
    query {
        tipos {
          name
        }
    }
`;

const CREATE_TIPO = gql`
    mutation CreateTipo($name: String!){
        createTipo(name: $name){
            name
        }
    }
`;

export function TipoInfo() {
  const { data, loading } = useQuery(
    QUERY_TIPOS, {
      pollInterval: 500 // refetch the result every 0.5 second
    }
  );
  
  // should handle loading status
  if (loading) return <p>Loading...</p>;
   
  return data.tipos.map(({name}) => (
    <div>
      <p>
        Tipo - {name}
      </p>
    </div>
  ));
}

export function CreateTipo() {
    let name;  
    const [createTipo] = useMutation(CREATE_TIPO);
    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    createTipo({ 
                        variables: {
                            name: name.value,
                        } 
                    });
                    name.value = '';
                    window.location.reload();
                }}
                style = {{ marginTop: '2em', marginBottom: '2em' }}
            >    
                <label>name: </label>
                <input
                  ref={node => {
                      name = node;
                  }}
                  style={{ marginRight: '1em' }}
                />
                <button type="submit" style={{ cursor: 'pointer' }}>Add a User</button>    
            </form>
        </div>
    );
  }