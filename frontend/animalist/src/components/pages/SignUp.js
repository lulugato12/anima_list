import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { UserInfo, CreateUser } from '../misc/User';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/',
});

const SignUp = () => {
    return (
        <React.Fragment>
            <ApolloProvider client={client}>
                <section className="content-container">
                    <CreateUser />
                    
                </section>
            </ApolloProvider>
        </React.Fragment>
    )
}

export default SignUp;