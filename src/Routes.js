import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/home/HomePage.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import ProductPage from "./pages/product/ProductPage.jsx";
import InputPage from "./pages/InputPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProductsPage from "./pages/products/ProductsPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/product" component={ProductPage}/>
        <Route exact path="/products" component={ProductsPage}/>

        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/register" component={RegisterPage}/>

        <Route exact path="/inputs" component={InputPage}/>
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
