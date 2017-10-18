import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './css/homepage.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx';
import ResearchPage from './pages/ResearchPage.jsx';
import JourneyPage from './pages/JourneyPage.jsx'
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import JoinPage from './pages/JoinPage.jsx';
import SignInPage from './pages/SignInPage.jsx';
import UserDashboard from './pages/UserDashboard.jsx';
import NavContainer from './containers/NavContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import configureStore from './store/configureStore.js';
import './css/Generic.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <NavContainer />
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/About' component={AboutPage} />
            <Route path='/Research' component={ResearchPage} />
            <Route path='/Journey' component={JourneyPage} />
            <Route path='/Research' component={ResearchPage} />
            <Route path='/Contact' component={ContactPage} />
            <Route path='/Join' component={JoinPage} />
            <Route path='/Signin' component={SignInPage} />
            <Route path='/UserDashboard' component={UserDashboard} />
            <Route path='/AdminDashboard' component={AdminDashboard} />
            <FooterContainer />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
