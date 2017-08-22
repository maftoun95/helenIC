import React, { Component } from 'react';
import './App.css';
import Content from './components/Content'

// containers
import IntroContainer from './containers/IntroContainer.jsx';
import NavContainer from './containers/NavContainer.jsx';
import FooterContainer from './containers/FooterContainer.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <NavContainer />
        <IntroContainer />
        <Content />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
