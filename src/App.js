import React, { Component } from 'react';
import './components/homepage.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import NavContainer from './containers/NavContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavContainer />
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/About' component={AboutPage} />
          <Route path='/Contact' component={ContactPage} />
          <Route path='/Signup' component={SignUpPage} />
          <Route path='/Products' component={ProductsPage} />
          <FooterContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
