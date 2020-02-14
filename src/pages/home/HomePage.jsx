import React from "react";
import {MDBRow} from "mdbreact";
import {graphql} from 'react-apollo';
import {HOME_QUERIES} from './queries.jsx';
import {
  CarouselHome ,
  ProductsHome, 
  CategoryMenuLinks} from  "./components/";
  
import SpinnerLoader from '../../components/loaders/spinnerLoader.jsx'


class HomePage extends React.Component {

  render() {
    const {
      data: {
        loading,
        error,
        allCarousel,
        allCategories,
        allFeaturedProducts
      }
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
