import React, {Component} from 'react';
import {
  MDBFooter
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import './assets/css/index.css';
import NavbarHome from "./components/navbar/navbarHome.jsx";
import CartModal from './components/modals/CartModal.jsx'


class App extends Component {

  render() {
    const mainStyle = {
      paddingTop: '5rem',
      paddingBottom:"5rem",
      minHeight:'100vh',
      paddingRight:1,
      paddingLeft:1
    }
    return (
      <Router>
          <NavbarHome/>
          <main style={mainStyle}>
            <CartModal isVisible={false} />
            <Routes/>
          </main>
          <MDBFooter className="z-depth-half border" >
              <p className='footer-copyright white mb-0 py-3 text-center text-dark'>
                &copy; {new Date().getFullYear()} Copyright:
                <a href='https://www.MDBootstrap.com' className="text-dark"> MDBootstrap.com </a>
              </p>
            </MDBFooter>
      </Router>
    );
  }
}

export default App;
