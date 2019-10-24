import React from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
} from "mdbreact";
import "../../assets/css/index.css";

class ProductCard extends React.Component {
  addToCart = () => {
    let product_id = this.props.product.id;
    console.log(product_id)
  };

  productDetail = () => {
    let product_slug = this.props.product.slug;
    console.log(product_slug)
  };


  render() {
    let product = this.props.product;
    return (
      <MDBCard cascade color="transparent">
        <MDBCardImage cascade className="img-fluid" src={product.image_url}/>
        <MDBCardBody cascade className="p-1" color="transparent">
          <MDBCardText>
            <strong><b>{product.name}</b></strong>
            <br/>
            {product.description}
            <MDBBtn className="btn-outline-black rounded float-right" >ADD TO CART</MDBBtn>
          </MDBCardText>
          <h5>
              <span className="float-left">
                {product.discount_price}
                <del style={{color:"#747373"}} className="ml-2">{product.price}</del>
              </span>
            </h5>
        </MDBCardBody>
        <div  className="position-absolute text-center h-50 w-100">
          <MDBBtn
            style={{
              top: '40%'
            }}
            color="black-outline"
            onClick={this.productDetail}>
            MORE INFORMATION
          </MDBBtn>
        </div>
      </MDBCard>
    )
  }
}

export default ProductCard;