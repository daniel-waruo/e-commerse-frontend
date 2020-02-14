import React from "react";
import SpinnerLoader from "../../components/loaders/spinnerLoader";
import {Redirect} from 'react-router-dom';

import {graphql} from 'react-apollo';
import compose from 'lodash.flowright';
import RegisterForm from './components/registerForm';
import {register,registerErrors} from './queries'


class RegisterPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      email:'',
      username:'',
      password1:'',
      password2:'',
      success:false
    }
  }

  register = e =>{
    // event prevent default
    e.preventDefault();
    this.props.register({variables:this.state}).then(
      success =>{
        if (success){
          this.setState({success:success});
        }
      }
    );
  }
  onChange = object => {
    this.setState(object);
  }
  render() {
    // get loginErrors and the user from the props
    const {data:{registerErrors,user},loading} = this.props ;
    if (loading) return <SpinnerLoader/>;
      
    if (this.state.success) {
      return <Redirect to={"/login"} />
    }
    if (user) {
      return <Redirect to={"/"} />
    }
    return <RegisterForm onChange={this.onChange} register={this.register} registerErrors={registerErrors} />
  }
}


const withApollo = compose(
  graphql(registerErrors),
  graphql(register,{name:'register'})
)

export default withApollo(RegisterPage);