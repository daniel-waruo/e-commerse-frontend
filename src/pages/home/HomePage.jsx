import React from "react";
import {MDBRow} from "mdbreact";
import CarouselHome from "../../components/carousel/carouselHome.jsx";
import "./../../assets/css/HomePage.css";
import "../../assets/css/fullPage.css";
import ProductsHome from "../../components/products/homeProducts.jsx";
import CategoryMenuLinks from "../../components/categories/CategoriesMenuLink.jsx";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      categories: [],
      products: [],
      carouselObjects: []
    }
  }

  componentDidMount() {
    this.setState(
      {
        isLoaded: true,
        categories: [
          {
            id: 1,
            name: "Category One",
            slug: "category-slug"
          },
          {
            id: 2,
            name: "Category Two",
            slug: "category-slug"
          },
          {
            id: 3,
            name: "Category Three",
            slug: "category-slug"
          },
        ],
        products: [
          {
            id: 1,
            name: "Product",
            price: "$200",
            discount_price: "$150",
            description: "This is a very Lovely Product",
            image_url: "https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
          },
          {
            id: 1,
            name: "Product",
            price: "$200",
            discount_price: "$150",
            description: "This is a very Lovely Product",
            image_url: "https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
          },
          {
            id: 1,
            name: "Product",
            price: "$200",
            discount_price: "$150",
            description: "This is a very Lovely Product",
            image_url: "https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
          },
          {
            id: 1,
            name: "Product",
            price: "$200",
            discount_price: "$150",
            description: "This is a very Lovely Product",
            image_url: "https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
          }
        ],
        carouselObjects: [
          {
            image_url: slide1,
            title: "First Carousel",
            description: "This is a very lovely carousel object",
            url: "/",
          },
          {
            image_url: slide2,
            title: "Second Carousel",
            description: "This is a very lovely second carousel object",
            url: "/",
          },
          {
            image_url: slide3,
            title: "Third Carousel",
            description: "This is a very lovely third carousel object",
            url: "/",
          }
        ]
      }
    )//get data required for the page to load
  }

  render() {
    return (
      <div className="mx-3">
        <MDBRow>
          <CarouselHome objects={this.state.carouselObjects} heightClass="f-90"/>
          <CategoryMenuLinks categories={this.state.categories} heightClass="f-100"/>
        </MDBRow>
        <ProductsHome products={this.state.products}/>
      </div>
    )//content to be rendered after page load
  };
}

export default HomePage;
