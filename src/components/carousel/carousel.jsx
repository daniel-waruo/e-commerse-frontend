import React from 'react'
import "../../assets/css/HomePage.css";
import "../../assets/css/fullPage.css"
import {MDBCol} from "mdbreact";

class BaseCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "isLoaded": Boolean(props.objects)
    }
  }

  carouselImageStyle = (image_url) => {
    return {
      minHeight: "350px",
      backgroundColor: "transparent",
      backgroundAttachment: "scroll",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundImage: "url('" + image_url + "')"
    }
  };

  componentDidMount() {
    if (this.props.objects) {
      this.setState({
        "isLoaded": true
      })
    }
  }

  carouselLoader = () => (
    <MDBCol md="12" lg="9" className="mx-auto px-2">
      <div className={"d-flex justify-content-center border border-black " + this.props.heightClass}>
        <div className="white spinner-border my-auto" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </MDBCol>
  );
  carouselContent = () => null;

  render() {
    if (this.state.isLoaded)
      return this.carouselContent();
    else
      return this.carouselLoader();
  }
}

export default BaseCarousel;