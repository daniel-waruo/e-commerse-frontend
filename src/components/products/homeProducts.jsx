import React from 'react';
import {
  MDBCol,
  MDBRow
} from "mdbreact";
import ProductCard from "./product.jsx";

class ProductsHome extends React.Component {

  render() {
    let products = this.props.products;
    const productList = products.map((product,index) =>
      <MDBCol sm="6" md="4" lg="3" className="my-2" key={index} >
        <ProductCard  product={product}/>
      </MDBCol>
    );//render a list of product components from the product objects
    return (
      <>
        <MDBRow id="categories">
          {productList}
        </MDBRow>  
      </>
    )
  }
}

export default ProductsHome;