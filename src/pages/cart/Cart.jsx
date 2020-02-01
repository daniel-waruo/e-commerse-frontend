import React from 'react'
import {MDBRow,MDBCol} from 'mdbreact'

class Cart extends React.Component{
  render(){
    return (
      <MDBRow>
        <MDBCol size={"12"} md={"9"} >
          <h1>CART</h1>
        </MDBCol>
        <MDBCol size="12" md={"3"}>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default Cart;