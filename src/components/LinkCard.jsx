import React from 'react';
import {Link} from 'react-router-dom';

export default class LinkCard extends React.Component{
    render(){
        return(
            <Link className='LinkCard' to={this.props.linkTo}>
                <img src={this.props.image} alt=''/>
                <p>{this.props.text}</p>
            </Link>
        )
    }
}

