import React from 'react';
import LinkCard from '../components/LinkCard.jsx';

export default class LinkCardContainer extends React.Component{
    buildCards(){
        return this.props.linkCards.map((card) => {
            return <LinkCard key={card.linkTo} text={card.text} image={card.image} linkTo={card.linkTo} width={Math.floor(100 / this.props.columns)}/>
        });
    }

    render(){
        return(
            <div className={'LinkCardContainer'}>
                {this.buildCards()}
            </div>
        )
    }
}