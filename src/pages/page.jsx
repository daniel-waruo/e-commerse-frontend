import React from "react";
import {showLoader,hideLoader} from "../components/mainLoader";

class BasePage extends React.Component {
  /*
  This component is the base page for all pages
  It gives abstracts the loader rendering by using the boolean prop
  is loaded to tell the add whether to show the loader or not
   */

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    }// set initial state
  }
  componentDidMount() {
    this.setState(
      {
        isLoaded: true,
      }
    )// set state is loaded as true after the component has loaded
  }
  pageContent = () => null;// method that returns the content to be rendered is the page is loaded
  render() {
    let {error, isLoaded} = this.state;
    if (error) {
      console.log("There is an error");
      //TODO:handle the error by redirecting to error pagenext time
      return null;
    }
    if (isLoaded) {
      hideLoader("main-loader");// fade out the loader
      return (this.pageContent());//show the page content
    }
    else{
      showLoader("main-loader");//show the loader
      return null // return null
    }
  }
}

export default BasePage;
