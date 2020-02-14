import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./assets/css/index.css";

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";

import App from "./app/";
import registerServiceWorker from './registerServiceWorker';
import {GRAPHQL_ENDPOINT} from './_constants'
import {resolvers, typeDefs} from './apollo'

// initialize cache object
const cache = new InMemoryCache();

// get token from local storage
const token = localStorage.getItem("token");

// initialize apollo client
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    headers: {
      authorization: token ? `Token ${token}` : "",
    },
    connectToDevTools: true,
    queryDeduplication: true
  }),
  typeDefs, resolvers
});

// set application initial state
cache.writeData({
  data: {
    addCartVisible: false,
    addCartProductID: null,
    loginErrors:null,
    registerErrors:null
  }
});

// render component on root of the app
ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root'));

registerServiceWorker();