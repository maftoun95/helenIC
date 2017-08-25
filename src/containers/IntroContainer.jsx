import React, { Component } from 'react';
import Image from './../components/Image';

export default class IntroContainer extends Component {
    render() {
        return (
            <div className="introWrapper">
                <div className="textContainer">
                    <h2 className="text">Interstitial Cystitis</h2>
                </div>
                <Image
                    image={"http://lorempixel.com/800/400"}
                    className={'introImage'}
                >
                </Image>
            </div>
        )
    }
};
