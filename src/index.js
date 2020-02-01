import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "mdbreact/";
import "./assets/css/index.css";

import App from "./App";
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {GRAPHQL_ENDPOINT} from './constants'

const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
  });

ReactDOM.render(
    <ApolloProvider  client={client} >
      <App/>
    </ApolloProvider>, 
    document.getElementById('root'));

registerServiceWorker();