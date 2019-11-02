import React from 'react';
import {
  MDBCarousel,
  MDBView,
  MDBCarouselItem,
  MDBCarouselInner,
  MDBCarouselCaption,
  MDBMask, MDBCol
} from "mdbreact";
import "../../assets/css/HomePage.css";
import "../../assets/css/fullPage.css"
import BaseCarousel from "./carousel.jsx";

class CarouselHome extends BaseCarousel {

  carouselContent = () => {
    let carouselList = this.props.objects.map(
      (carousel, index) => {
        return (
          <MDBCarouselItem itemId={index + 1} key={index}>
            <MDBView>
              <div style={this.carouselImageStyle(carousel.image_url)} className={this.props.heightClass} />
              <MDBMask overlay="black-light"/>
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">{carousel.title}</h3>
              <p>{carousel.description}</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        )
      }
    );
    return (
      <MDBCol md={"12"} lg={"9"}  className="mx-auto px-2">
        <MDBCarousel
          activeItem={1}
          length={carouselList.length}
          showControls={true}
          showIndicators={true}
          slide={true}
          mobileGesture={true}
          onHoverStop={true}
        >
          <MDBCarouselInner>
            {carouselList}
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBCol>
    );
  }
}

export default CarouselHome;
