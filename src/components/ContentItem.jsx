import React, { Component } from 'react';

export default class ContentItem extends Component {
    render(){
        return(
            <div className="contentItem">
                <img src="http://lorempixel.com/output/people-q-c-200-200-2.jpg" alt=""/>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perspiciatis necessitatibus amet excepturi provident cupiditate dolores unde nobis fugit modi doloremque, ipsa quia sapiente, voluptas rerum, ex corrupti, sint odio.
                </div>
            </div>
        );
    }
};

const itemStyles = {
    item: {
        
    }
};