import React from 'react';
import "../assets/css/HomePage.css";
import "../assets/css/fullPage.css"
import BasePage from "./page";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import CarouselProduct from "../components/carousel/carouselProduct";

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
    return (<CarouselProduct objects={this.state.product.images} heightClass={"f-85"}/>)
  }
}

export default ProductPage;
  