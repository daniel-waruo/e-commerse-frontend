import React, {Component} from 'react';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from 'mdbreact';

import SearchForm from "./search_form";
import UserInfoDropdown from "./userInfoDropdown"

class NavbarHome extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({collapseID: ''});
  };

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{backgroundColor: 'transparent'}}
        onClick={this.toggleCollapse('mainNavbarCollapse')}
      />
    );
    const {collapseID} = this.state;

    return (
      <div>
        <MDBNavbar color='white' light expand='lg' fixed='top' scrolling>
          <MDBNavbarBrand href='/' className='py-0 font-weight-bold'>
            <Logo style={{height: '2.5rem', width: '2.5rem'}}/>
            <strong className='align-middle'>E-commerse store React</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={this.toggleCollapse('mainNavbarCollapse')}/>
          <MDBCollapse
            id='mainNavbarCollapse'
            isOpen={this.state.collapseID}
            navbar>
              <SearchForm/>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink
                  exact
                  to='/'
                  onClick={this.closeCollapse('mainNavbarCollapse')}>
                  <MDBIcon icon="home" className="mr-1"/>
                  <strong>Home</strong>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon icon="envelope" className="mr-1"/>
                  Contact Us
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon icon="cog" className="mr-1"/>
                  Settings
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon icon="shopping-cart" className="mr-1"/>
                  <sup style={{
                    padding:3,
                    textEmphasisStyle:"bold"
                  }} className="rounded-circle">3</sup>
                  Cart
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>  
                <UserInfoDropdown/>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        {collapseID && overlay}
        </div>
    );
  }
}


export default NavbarHome;
