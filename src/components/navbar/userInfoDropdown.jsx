import React from 'react'
import {MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle} from "mdbreact";

class UserInfoDropdown extends React.Component {

  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle className="dropdown-toggle" nav>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg"
            className="rounded-circle z-depth-0"
            style={{height: "35px", padding: 0}}
            alt=""
          />
        </MDBDropdownToggle>
        <MDBDropdownMenu className="dropdown-default" right>
          <MDBDropdownItem href="#!">My account</MDBDropdownItem>
          <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    )
  }
}

export default UserInfoDropdown;