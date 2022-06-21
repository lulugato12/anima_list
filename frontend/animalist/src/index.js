import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import { ApolloProvider } from '@apollo/react-hooks';
import { createHttpLink, ApolloClient, InMemoryCache} from "@apollo/client";
import {setContext} from '@apollo/client/link/context';
import {AUTH_TOKEN} from "./components/constants/constants";

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/'
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);