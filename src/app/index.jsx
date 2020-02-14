import React, {Component} from 'react';

import {graphql} from 'react-apollo'
import {gql} from 'apollo-boost';
import compose from 'lodash.flowright';
import {APP_QUERY} from './queries'

import {BrowserRouter as Router} from 'react-router-dom';
import Routes from '../routes/';

import MainNavbar from "./components/navbar";
import ProductDialog from './components/productDialog'
import SpinnerLoader from '../components/loaders/spinnerLoader.jsx'
import MainFooter from '../components/footer.jsx';

class App extends Component {

  render() {
    const mainStyle = {
      paddingTop: '5rem',
      paddingBottom: "5rem",
      minHeight: '100vh',
      marginRight: 1,
      marginLeft: 1
    }
    const {data:{
            loading,
            error,
            addCartVisible, 
            addCartProductID,
            user ,
            cart
          }} = this.props;
          
    if (loading) return <SpinnerLoader/>
    
    if (error) return null
    
    return (
      <Router>
        <MainNavbar cart={cart} user={user} logout={this.props.logout} />
        <main style={mainStyle}>
          <ProductDialog isVisible={addCartVisible} productID={addCartProductID}/>
          <Routes/>
        </main>
        <MainFooter/>
      </Router>
    );
  }
}

const withApollo = compose(
  graphql(APP_QUERY),
  graphql(
    gql`
      mutation Logout{
        logout @client
      }
    `,{name:'logout'}
  )
);

export default withApollo(App);
