import React from 'react';
import {MDBCollapse, MDBIcon, MDBInput,MDBNavItem,MDBNavbarNav} from "mdbreact";
import windowSize from 'react-window-size'
import WindowSizeListener from 'react-window-size-listener'


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      collapseOpen: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
        
  }

  toggleSearch = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  handleResize = () => {
    if (this.props.windowWidth >= 977 && this.props.windowWidth <= 1100) {
      console.log(this.props.windowWidth);
      if (this.state.collapseOpen === true) {
        this.setState(
          {collapseOpen: false}
        )
      }
    }
    else {
      if (this.state.collapseOpen === false) {
        this.setState(
          {collapseOpen: true}
        )
      }
    }
  };

  render() {
    return (
      <MDBNavbarNav left>  
        <MDBNavItem>
          <form onSubmit={this.handleSubmit} className="nav-item form-inline">
          <MDBCollapse
            id={"searchFormCollapse"}
            isOpen={this.state.collapseOpen}
          >
            <WindowSizeListener onResize={this.handleResize}/>
            <MDBInput
              containerClass="my-1"
              label="Search for Products"
              arialabel="Search for Products"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </MDBCollapse>
          <MDBIcon icon="search" className={"hoverable"} onClick={this.toggleSearch}>
          </MDBIcon>
        </form>
        </MDBNavItem>
      </MDBNavbarNav>
    );
  }
}

export default windowSize(SearchForm);