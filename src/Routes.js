import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/product" component={ProductPage}/>
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
