import React, { useEffect } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_USERS = gql`
    query {
        users {
        id
        username
        email
        }
    }
`;

const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!){
        createUser(username: $username, email: $email, password: $password){
            user {
                id
                username
                email
                password
            }
        }
    }
`;

export function UserInfo() {
  const { data, loading } = useQuery(
    QUERY_USERS, {
      pollInterval: 500 // refetch the result every 0.5 second
    }
  );
  
  // should handle loading status
  if (loading) return <p>Loading...</p>;
   
  return data.users.map(({ id, username, email }) => (
    <div key={id}>
      <p>
        User - {id}: {username} {email}
      </p>
    </div>
  ));
}

export function CreateUser() {
    let username, email, password;  
    const [createUser, {data, error}] = useMutation(CREATE_USER);
    useEffect(()=>{
        console.log(data)
    }, [data])
    return (
        <div>
            <form
                onSubmit={async e => {
                    try {
                        e.preventDefault();
                        const aux = await createUser({ 
                            variables: {
                                username: username.value,
                                email: email.value,
                                password: password.value
                            } 
                        });
                        console.log(aux)
                        username.value = '';
                        email.value = '';
                        password.value = '';   
                        window.location.reload();
                    } catch (error) {
                        console.log(error)
                    }
                    
                }}
                style = {{ marginTop: '2em', marginBottom: '2em' }}
            >    
                <label>Username: </label>
                <input
                ref={node => {
                    username = node;
                }}
                style={{ marginRight: '1em' }}
                />     
                <label>Email: </label>
                <input
                ref={node => {
                    email = node;
                }}
                style={{ marginRight: '1em' }}
                />
                <label>Password: </label>
                <input
                ref={node => {
                    password = node;
                }}
                style={{ marginRight: '1em' }}
                />
                <button type="submit" style={{ cursor: 'pointer' }}>Add a User</button>    
            </form>
        </div>
    );
}