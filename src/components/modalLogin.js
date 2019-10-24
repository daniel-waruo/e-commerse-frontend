import React, {Component} from 'react';
import {
  MDBContainer, 
  MDBBtn, 
  MDBModal, 
  MDBModalBody, 
  MDBModalHeader, 
  MDBModalFooter
} from 'mdbreact';

class ModalLoginForm extends Component {
  constructor(props){
    super(props);
    this.state({
      "isOpen":false
    })
  }
  toggle = () => (
    this.setState({
      "isOpen":!this.state.isOpen
    })
  )
  render() {
    return (
      <MDBContainer>
        <MDBModal isOpen={this.state.isOpen} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
          <MDBModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo
            consequat.
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
            <MDBBtn color="primary">Save changes</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
        <MDBBtn color="primary">Small modal</MDBBtn>
      </MDBContainer>
      //36551720
    );
  }
}


export default ModalLoginForm;