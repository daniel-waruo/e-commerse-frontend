import React from "react";
import {MDBRow} from "mdbreact";
import CarouselHome from "../../components/carousel/carouselHome.jsx";
import "./../../assets/css/HomePage.css";
import "../../assets/css/fullPage.css";
import ProductsHome from "../../components/products/homeProducts.jsx";
import CategoryMenuLinks from "../../components/categories/CategoriesMenuLink.jsx";
import SpinnerLoader from '../../components/loaders/spinnerLoader.jsx'
import { graphql } from 'react-apollo';
import {HOME_QUERIES} from './queries.jsx';


class HomePage extends React.Component {
  
  render() {
    const { data: { 
                    loading,
                    error,
                    allCarousel,
                    allCategories,
                    allFeaturedProducts} 
          } = this.props;

    if (loading) return <SpinnerLoader/>;
    if (error) return <p>Error :(</p>;
    
    return (
      <div className="mx-3">
        <MDBRow>
          <CarouselHome objects={allCarousel} heightClass="f-90"/>
          <CategoryMenuLinks categories={allCategories} heightClass="f-100"/>
        </MDBRow>
        <ProductsHome products={allFeaturedProducts}/>
      </div>
    )//content to be rendered after page load
  }
}

export default graphql(HOME_QUERIES)(HomePage);
