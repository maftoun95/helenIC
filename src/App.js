import React, { Component } from 'react';
import './App.css';

// containers
import IntroContainer from './containers/IntroContainer.jsx';
import NavContainer from './containers/NavContainer.jsx';

class App extends Component {
  render() {
    // return (
    //   <div>
    //     <Content />
    //   </div>
    // );
    return (
      <div>
        <NavContainer />
        <IntroContainer />
      </div>
    );
    // return (
    //   <div>
    //     <Navbar/>
    //     <Intro/>
    //     <Content/>
    //     <Footer/>
    //   </div>
    // );
  }
}

export default App;
