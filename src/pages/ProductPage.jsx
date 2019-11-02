import React from 'react';
import "../assets/css/HomePage.css";
import "../assets/css/fullPage.css"
import BasePage from "./page";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import CarouselProduct from "../components/carousel/carouselProduct";
import {MDBBtn, MDBCol, MDBRow} from "mdbreact";
import Rating from "react-rating";


class ProductPage extends BasePage {
  constructor(props) {
    super(props);
    this.state = {
      "isLoaded": Boolean(props.product)
    }
  }

  componentDidMount() {
    this.setState({
      "isLoaded": true,
      "product": {
        id: 1,
        name: "Product",
        price: "$200",
        discount_price: "$150",
        description: "This is a very Lovely Product",
        images: [slide1, slide3, slide2]
      }
    });
  }

  pageContent = () => {
    return (
      <div className={"mx-1"}>
        <MDBRow>
          <MDBCol md="6" lg="7" className="mx-auto px-2">
            <CarouselProduct objects={this.state.product.images} heightClass={"f-85"}/>
          </MDBCol>
          <MDBCol md={"6"} lg={"5"}>
            <div className={"mx-2"}>
              <h1>{this.state.product.name}</h1>
              <p>{this.state.product.description}</p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol="fa fa-star fa-2x text-light"
                fullSymbol="fa fa-star fa-2x yellow-text"
              />
              <h5 className={"m-1"}>
                {this.state.product.discount_price}
                <del className="ml-2 grey-text">{this.state.product.price}</del>
              </h5>
              <MDBRow>
                <MDBCol md={"6"}>
                  <MDBBtn className="aqua-gradient rounded float-right w-100">ADD TO CART</MDBBtn>
                </MDBCol>
                <MDBCol md={"6"}>
                  <MDBBtn className="blue-gradient-rgba rounded float-right w-100">BUY NOW</MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default ProductPage;
  