import React, {Component} from 'react';
import {
  MDBFooter
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import './assets/css/index.css';
import NavbarHome from "./components/navbar/navbarHome.jsx";

class App extends Component {

  render() {
    return (
      <Router>
        <div className='flyout'>
          <NavbarHome/>
            <main style={{paddingTop: '5rem',paddingBottom:"5rem",minHeight:'110vh'}}>
              <Routes removeLoader={this.hideLoader}/>
            </main>
            <MDBFooter className="z-depth-half border" >
              <p className='footer-copyright white mb-0 py-3 text-center text-dark'>
                &copy; {new Date().getFullYear()} Copyright:
                <a href='https://www.MDBootstrap.com' className="text-dark"> MDBootstrap.com </a>
              </p>
            </MDBFooter>
        </div>
      </Router>
    );
  }
}

export default App;
