import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "mdbreact/";
import "./assets/css/index.css";
import App from "./App";
import MainLoader from "./components/mainLoader.jsx"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App /> , document.getElementById('root'));
ReactDOM.render( <MainLoader className={"d-none"} title={"E-commerce Application"} /> , document.getElementById('main-loader'));

registerServiceWorker();