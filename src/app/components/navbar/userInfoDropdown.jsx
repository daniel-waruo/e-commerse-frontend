import React from 'react'
import {MDBDropdown, MDBDropdownMenu, MDBDropdownToggle} from "mdbreact";
import {Link} from 'react-router-dom'

class UserInfoDropdown extends React.Component {

  render() {
    const user = this.props.user;
    const dropDownItems = () => {
      if (user !== null){
        return (
          <>
            <Link className={"dropdown-item"} to="/account">My account</Link>
            <Link className={"dropdown-item"} onClick={this.props.logout} to="#" >Log out</Link>
          </>)
      }
      return (
        <>
          <Link className={"dropdown-item"} to={"/register"} >
            Register
          </Link>
          <Link className={"dropdown-item"} to={"/login"} >
            Log In
          </Link>
        </>
      )
    }
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
        <MDBDropdownMenu className="dropdown-default">
          {dropDownItems()}
        </MDBDropdownMenu>
      </MDBDropdown>
    )

  }
}

export default UserInfoDropdown;