import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import LogIn from "./components/pages/LogIn";
import Anime from "./components/pages/Anime";
import Movies from "./components/pages/Movies";
import Ovas from "./components/pages/Ovas";
import Favorites from "./components/pages/Favorites";
import Finished from "./components/pages/Finished";
import Watching from "./components/pages/Watching";
import Watchlist from "./components/pages/Watchlist";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { AUTH_TOKEN } from "./components/constants/constants";
import "./App.css";

const httpLink = createHttpLink({
  uri: "http://localhost:8000/graphql/",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  uri: authLink.concat(httpLink),
  credentials: "include",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="body-wrap">
        <Layout>
          <Routes>
            <Route path="/Anime" element={<Anime />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Ovas" element={<Ovas />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Finished" element={<Finished />} />
            <Route path="/Watching" element={<Watching />} />
            <Route path="/Watchlist" element={<Watchlist />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </ApolloProvider>
  );
}
export default App;
