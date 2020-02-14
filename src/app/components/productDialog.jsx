import React from "react";
import {MDBBtn, MDBCol, MDBIcon, MDBInputGroup, MDBModal, MDBRow} from "mdbreact";
import Rating from "react-rating";

import {gql} from 'apollo-boost';

import {graphql,Query} from 'react-apollo';
import compose from 'lodash.flowright'

import SpinnerLoader from "../../components/loaders/spinnerLoader.jsx"
import CarouselProduct from "../../pages/product/components/carouselProduct";

const PRODUCT_QUERIES = gql`
  query Product($productID:String!){
    product(id:$productID){
      id
      name
      price
      discountPrice
      description
      images {
        image
      }
    }
  }
`;

class ProductDialog extends React.Component {

  render() {
    const isVisible = this.props.isVisible,
          productID = this.props.productID 
    ;
    if (isVisible === true){
      return (
        <Query query={PRODUCT_QUERIES} variables={{productID:productID}} >
          {({data,loading,error}) => {
            if (loading) return <SpinnerLoader/>
            if (error) return <p> Error :( </p>

            const product = data.product ,
                  productImages = product.images.map(
                    (image)=>image.image
                  );
            return (
              <MDBModal isOpen={isVisible} className={"my-3"} size="fluid" centered>
                <MDBRow className={"p-1"}>
                  <MDBCol size={"12"} lg={"7"}>
                    <CarouselProduct objects={productImages} heightClass={"f-85"}/>
                  </MDBCol>
                  <MDBCol size={"12"} lg={"5"}>
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
                            <MDBIcon icon="cart-plus" className={"float-left"} size={"2x"}/>
                            <span className={"h6"}>ADD TO CART</span>
                          </MDBBtn>
                        </MDBCol>
                        <MDBCol md={"6"}>
                          <MDBBtn className="blue-gradient-rgba rounded float-right w-100">
                            <MDBIcon icon={"money-bill-alt"} className={"float-left"} size={"2x"}/>
                            <span className={"h6"}>BUY NOW</span>
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className={"justify-content-center"}>
                        <MDBCol size={"12"} md={"7"}>
                          <MDBBtn className="blue-gradient-rgba rounded float-right w-100 ">
                            <MDBIcon icon="plus-circle" className={"float-left"} size={"2x"}/>
                            <span className={"h6"}>MORE INFORMATION</span>
                          </MDBBtn>
                        </MDBCol>
                      </MDBRow>
                      <MDBBtn color={"warning"} onClick={this.props.removeDialog}  className={"my-3 float-right"}>
                        CLOSE
                      </MDBBtn>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBModal>
            )
          }
        }
        </Query>
        )
      }
    
    return null
  }
}

const removeDialog = gql`
  mutation {
    removeProductDialog @client
  }
`;


const withMutations = compose(
  graphql(removeDialog,{name:'removeDialog'})
  )

export default withMutations(ProductDialog);

