import React from 'react';
import IntroContainer from '../containers/IntroContainer.jsx';
import Content from '../containers/Content';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <IntroContainer />
        <Content />
      </div>
    )
  }
}