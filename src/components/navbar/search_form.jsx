import React from 'react';
import {MDBCollapse, MDBIcon, MDBInput} from "mdbreact";
import Axios from 'axios';
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
    Axios.create({
      baseURL: "http://api.commerce.com"
    }).get('/')
      .then(
        function (response) {
          console.log(response)
        })
      .then(
        function (data) {
          console.log(data)
        })
      .catch(
        function (error) {
          console.log(error)
        });
    Axios.create({
      baseURL: "http://api.commerce.com"
    }).post('/')
      .then(
        function (response) {
          console.log(response)
        })
      .then(
        function (data) {
          console.log(data)
        })
      .catch(
        function (error) {
          console.log(error)
        })
  }

  toggleSearch = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  handleResize = () => {
    if (this.props.windowWidth >= 977 && this.props.windowWidth <= 1000) {
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
      <div className="my-2">
        <form onSubmit={this.handleSubmit} className=" d-flex form-inline">
          <MDBCollapse
            id={"searchFormCollapse"}
            isOpen={this.state.collapseOpen}
          >
            <WindowSizeListener onResize={this.handleResize}/>
            <MDBInput
              label="Search for Products"
              arialabel="Search for Products"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </MDBCollapse>
          <MDBIcon icon="search" className={"hoverable"}>
          </MDBIcon>
        </form>
      </div>
    );
  }
}

export default windowSize(SearchForm);