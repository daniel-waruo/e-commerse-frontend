import React from 'react';
import "../../assets/css/HomePage.css";
import "../../assets/css/fullPage.css"
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import CarouselProduct from "../../components/carousel/carouselProduct";
import {MDBBtn, MDBCol, MDBRow,MDBIcon, MDBInputGroup} from "mdbreact";
import Rating from "react-rating";
import { graphql } from 'react-apollo';
import {PRODUCT_QUERIES} from './queries.jsx';
import SpinnerLoader from '../../components/loaders/spinnerLoader.jsx'

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Product",
        price: "$200",
        discount_price: "$150",
        description: "This is a very Lovely Product",
        images: [slide1, slide3, slide2]
      }
    }
  }

  render() {
    const { data: { 
      loading,
      error,
      allProducts
    }} = this.props;
    if (loading) return <SpinnerLoader/>;
    if (error) return <p>Error :(</p>;

    // get the product information
    const product = allProducts.edges[0].node,
          productImages = product.images.map(
            (image,index) => image.image
          )
    ;
    return (
      <div className={"mx-1"}>
        <MDBRow>
          <MDBCol md="6" lg="7" className="mx-auto px-2">
            <CarouselProduct objects={productImages} heightClass={"f-85"}/>
          </MDBCol>
          <MDBCol md={"6"} lg={"5"}>
            <div className={"mx-2"}>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol="fa fa-star fa-2x text-light"
                fullSymbol="fa fa-star fa-2x yellow-text"
              />
              <h5 className={"m-1"}>
                {product.discountPrice}
                <del className="ml-2 grey-text">{product.price}</del>
              </h5>
              
              <MDBInputGroup material containerClassName="mb-3 mt-0 w-50"
                size={"lg"}
                type="number"
                valueDefault={1}
                min={1}
                max={1000000}
                hint="Number of Products"
                prepend={
                  "Quantity"
                }
              />
              <MDBRow>
                <MDBCol md={"6"}>
                  <MDBBtn className="aqua-gradient rounded float-right w-100">
                    <MDBIcon icon="cart-plus" className={"float-left"} size={"2x"} />
                    <span className ={"h6"}>ADD TO CART</span>
                  </MDBBtn>
                </MDBCol>
                <MDBCol md={"6"}>
                  <MDBBtn className="blue-gradient-rgba rounded float-right w-100">
                    <MDBIcon icon={"money-bill-alt"} className={"float-left"} size={"2x"}/>
                    <span className={"h6"} >BUY NOW</span>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

function getProductSlug(props){
  return props.match.params.productSlug
}

export default graphql(
  PRODUCT_QUERIES,
  {
    options: (props) => ({ variables: { productSlug: getProductSlug(props) } })
  }
)(ProductPage);
  