import React from "react";
import {MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdbreact';

class RegisterPage extends React.Component {

  render() {
    return (
      <MDBContainer>
        <MDBRow className="justify-content-center my-auto">
          <MDBCol md="6" className={"rounded my-auto"}>
            <form>
              <h1 className="h1 text-center mb-4">Register</h1>
              <div className="grey-text">
                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                          success="right"/>

                <MDBInput label="Type your First Name" icon="user" group type="email" validate error="wrong"
                          success="right"/>
                <MDBInput label="Type your Last Name" icon="user" group type="email" validate error="wrong"
                          success="right"/>
                <MDBInput label="Type your password" icon="lock" group type="password" validate/>
                <MDBInput label="Confirm Password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <MDBBtn>Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default RegisterPage;