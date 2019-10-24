import React from 'react';
import {MDBBtn, MDBIcon} from "mdbreact";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <div className="md-form my-0">
          <form onSubmit={this.handleSubmit} className="form-inline">
            <MDBIcon icon="search"/>
            <input
              value={this.state.value}
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search Products"
              aria-label="Search Products"
              onChange={this.handleChange}
            />
            <MDBBtn
              outline size="md"
              className="m-0 px-3 py-2 z-depth-0">
              Search
            </MDBBtn>
          </form>
        </div>

    );
  }
}

export default SearchForm;