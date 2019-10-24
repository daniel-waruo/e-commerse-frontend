import React from "react";
import {MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn} from 'mdbreact';
import BasePage from "./page";

class LoginPage extends BasePage {
  pageContent = () => {
    return (
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="6" className={"rounded"}>
            <form>
              <p className="h5 text-center mb-4">Log in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default LoginPage;