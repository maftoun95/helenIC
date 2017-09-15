import React, { Component } from 'react';
import './css/homepage.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import NavContainer from './containers/NavContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavContainer />
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/About' component={AboutPage} />
          <Route path='/Contact' component={ContactPage} />
          <Route path='/Join' component={SignUpPage} />
          <Route path='/UserDashboard' component={UserDashboard} />
          <Route path='/Login' component={UserDashboard} />
          <Route path='/AdminDashboard' component={AdminDashboard} />
          <FooterContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
