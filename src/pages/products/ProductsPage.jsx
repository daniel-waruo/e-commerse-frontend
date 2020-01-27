import React from 'react'
import {MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow} from 'mdbreact'
import SideNav from "../../components/sidenav/SideNav.jsx"
import RangeSlider from "../../components/rangeSlider/rangeSlider"
import './products.css'

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: false
    }
  }

  toggleSideNav = () => {
    this.setState(
      {sideNavOpen: !this.state.sideNavOpen}
    )
  };

  render() {
    const divStyle = {
      marginLeft: (this.state.sideNavOpen) ? 250 : 0,
      transition: "margin-left .5s",
      paddingLeft: 16
    };

    return (
      <>
        <MDBContainer fluid>
          <SideNav toggleFunction={this.toggleSideNav} isOpen={this.state.sideNavOpen}>
            <div className={"h3 nav-link text-white text-center"}>Filters</div>
            <div>
              <RangeSlider title={"Price"} min={1} max={10} step={1}/>
            </div>
          </SideNav>
        </MDBContainer>
        <MDBContainer style={divStyle} className={"sidenav-main"}>
          <h1 className={"text-center h-100"}>Products</h1>
          <MDBRow center>
            <MDBCol size={"12"} md={"9"}>
              <MDBInput
                label="Search Here"
                icon="search"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
            </MDBCol>
            <MDBCol size={"12"} md={"9"}>
              <MDBBtn onClick={this.toggleSideNav}>
                <MDBIcon icon={"search"}/>
                <span className={"mx-2"}>Search</span>
              </MDBBtn>
              <MDBBtn onClick={this.toggleSideNav}>
                <MDBIcon icon={"sliders-h"}/>
                <span className={"mx-2"}>Filter</span>
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}

export default ProductsPage;