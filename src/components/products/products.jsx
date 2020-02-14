import React from 'react';
import {MDBCol, MDBRow} from "mdbreact";
import {Query} from "react-apollo";

import SpinnerLoader from "../loaders/spinnerLoader.jsx"
import ProductCard from "./product.jsx";



class Products extends React.Component {

  render() {

    return (
      <Query query={this.props.query} variables={this.props.variables}>
        {({loading, error, data}) => {

          if (loading) return <SpinnerLoader/>;

          if (error) return `Error! ${error.message}`;

          const products = data.allProducts.edges;

          return (
            <MDBRow >
              {products.map((product, index) => (
                <MDBCol size={"12"} sm={"6"} md={"4"} lg={"3"} className="my-2" key={index}>
                  <ProductCard product={product.node}/>
                </MDBCol>
              ))}
            </MDBRow>
          )//render a list of product components from the product objects
        }}
      </Query>
    )
  }
}

export default Products;