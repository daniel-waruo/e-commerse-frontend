import React from 'react'
import "./sidenav.css"

class SideNav extends React.Component {
  static defaultProps = {
    isOpen: false,
    toggleFunction: function () {
    }
  };

  render() {
    const classes = (this.props.isOpen) ? "sidenav-open" : "";
    return (
      <div className={"sidenav " + classes}>
        <span className="closebtn" style={{color: "white"}}
           onClick={this.props.toggleFunction}>&times;</span>
        {this.props.children}
      </div>

    )
  }
}

export default SideNav;