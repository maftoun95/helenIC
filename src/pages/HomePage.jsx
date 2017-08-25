import React from 'react';
import IntroContainer from '../containers/IntroContainer.jsx';
import Content from '../components/Content.jsx';
import FooterContainer from '../containers/FooterContainer.jsx';

export default class HomePage extends React.Component{
  render(){
    return(
      <div>
        <IntroContainer />
        <Content />
      </div>
    )
  }
}
