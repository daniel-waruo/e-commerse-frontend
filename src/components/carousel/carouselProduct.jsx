import React from 'react';
import {
  MDBCarousel,
  MDBView,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBMask, MDBCol
} from "mdbreact";
import "../../assets/css/HomePage.css";
import "../../assets/css/fullPage.css"
import BaseCarousel from "./carousel.jsx";


class CarouselProduct extends BaseCarousel {

  carouselContent = () => {
    let productList = this.props.objects.map(
      (image, index) => {
        return (
          <MDBCarouselItem itemId={index + 1} key={index}>
            <MDBView>
              <div style={this.carouselImageStyle(image)} className={this.props.heightClass}/>
              <MDBMask overlay="black-light"/>
            </MDBView>
          </MDBCarouselItem>
        )
      }
    );
    return (
      <MDBCol md="12" lg="9" className="mx-auto px-2">
        <MDBCarousel
          activeItem={1}
          length={productList.length}
          showControls={true}
          showIndicators={true}
          slide={true}
          mobileGesture={true}
          onHoverStop={true}
        >
          <MDBCarouselInner>
            {productList}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBCol>
    );
  };
}

export default CarouselProduct;
