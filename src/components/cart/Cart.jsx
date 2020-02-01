import React from 'react'
import {MDBContainer} from "mdbreact";

class CartItem extends React.Component {
  
  render() {
    return <p>CART ITEM</p>
  }
}

class Cart extends React.Component {

  defaultProps = {
    products:[
      {
        id:"product pk",
        name:"Product Name",
        picture:"link to picture",
        price:"price of products",
        number:"number of products in cart"
      }
    ]
  }
  render() {
    const products = this.props.products
    return (
      <>
      </>
    )
  }
}

export {Cart, CartItem};