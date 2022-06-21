import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { SignIn } from '../misc/auth';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql/', // your GraphQL Server 
});

const LogIn = () => {
    return (
        <React.Fragment>
            <ApolloProvider client={client}>
                <section className="content-container">
                    <SignIn />
                </section>
            </ApolloProvider>
        </React.Fragment>
    )
}

export default LogIn;