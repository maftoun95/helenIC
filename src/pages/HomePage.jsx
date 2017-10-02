import React from 'react';
import HomeDescription from '../components/HomeDescription.jsx';
import HomeStory from '../components/HomeStory.jsx';
import LinkCardContainer from '../containers/LinkCardContainer.jsx';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HomeDescription />
        <HomeStory />
        <LinkCardContainer columns={3} linkCards={[
          {
            text: 'JOIN THIS HEALTH TRIAL',
            image: '../../pictures/join.PNG',
            linkTo: '/join'
          },
          {
            text: 'TESTIMONIAL',
            image: '../../pictures/testimonial.PNG',
            linkTo: '/testimonial'
          },
          {
            text: 'NEWS LETTERS',
            image: '../../pictures/news_letters.PNG',
            linkTo: '/news'
          }
        ]} />
      </div>
    )
  }
}