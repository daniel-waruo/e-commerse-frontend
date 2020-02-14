import React from 'react';
import {Redirect} from 'react-router-dom';
import {graphql} from 'react-apollo';
import compose from 'lodash.flowright';
import SpinnerLoader from "../../components/loaders/spinnerLoader";
import LoginForm from "./components/loginForm";
import { login,loginErrors } from './queries';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password:''
    };
  }
  onChange = object =>{
    this.setState(object)
  }  
  login = event => {
    // prevent default submit behaviour
    event.preventDefault();
    // run the login mutation
    this.props.login({variables:this.state})
  }

  render() {
    // get loginErrors and the user from the props
    const {data:{loginErrors,user},loading} = this.props ;
    // if still loading show spinner loader
    if (loading) return <SpinnerLoader/>;
    
    // if user redirect to  redirect home or next 
    //TODO : implement next 
    if (user) {
      console.log("Please Redirect Me.")
      return <Redirect to={"/"} />
    }
    // return login form for rendering 
    
    return (
      <LoginForm onChange={this.onChange} login={this.login} loginErrors={loginErrors} loading={false} />
    )
  }
}

const withApollo = compose(
  graphql(loginErrors),
  graphql(login,{name:'login'})
)

export default withApollo(LoginPage);
