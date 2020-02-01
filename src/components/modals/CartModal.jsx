import  React  from "react";
import { MDBModal,MDBInputGroup,MDBBtn, MDBRow, MDBCol,MDBIcon } from "mdbreact";
import Rating from "react-rating";
import CarouselProduct from "../carousel/carouselProduct";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";


class CartModal extends React.Component{
    static defaultProps = {
        product: {
            id: 1,
            name: "Product",
            price: "$200",
            discount_price: "$150",
            description: "This is a very Lovely Product",
            images: [slide1, slide3, slide2]
          } 
    }  
    state = {
      modal: false
    }
    
    toggle = () => {
      this.setState({
          modal: !this.state.modal
      });
    }
    
  render(){

    return (
      <MDBModal isOpen={this.state.modal}  className={"my-3"} toggle={this.toggle} size="fluid" centered>
        <MDBRow className={"p-1"}>
          <MDBCol size={"12"} lg={"7"} >
              <CarouselProduct objects={this.props.product.images} heightClass={"f-85"} />
          </MDBCol>
          <MDBCol size={"12"} lg={"5"} >
          <div className={"mx-2"}>
              <h1>{this.props.product.name}</h1>
              <p>{this.props.product.description}</p>
              <Rating
                initialRating={2}
                readonly
                emptySymbol="fa fa-star fa-2x text-light"
                fullSymbol="fa fa-star fa-2x yellow-text"
              />
              <h5 className={"m-1"}>
                {this.props.product.discount_price}
                <del className="ml-2 grey-text">{this.props.product.price}</del>
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
              <MDBRow className={"justify-content-center"}>
                <MDBCol size={"12"} md={"7"} >
                  <MDBBtn className="blue-gradient-rgba rounded float-right w-100 ">
                  <MDBIcon icon="plus-circle" className={"float-left"} size={"2x"} />
                      <span className={"h6"}>MORE INFORMATION</span>
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBModal>
    )
  }
}

export default CartModal