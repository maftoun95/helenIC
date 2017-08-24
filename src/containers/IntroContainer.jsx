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
const introStyles = {
    container: {
        display: "flex",
        backgroundColor: "#e0ffff",
        flexDirection: "row",
        width: "80%",
        margin: "0 auto",
        padding: "10px"
    },
    textContainer: {
        display: "inline-block",
        textAlign: "center",
        minWidth: "20%",
        margin: "5%",

    },
    text: {
        fontSize: "32px",
        fontFamily: "cursive",
        boxShadow: "5px 5px 5px #888888",
        overflow: "hidden",
        padding: "0 10px"
    },
    image: {
        maxWidth: "100%",
        height: "auto",
        display: "inline-block",
        overflow: "hidden",
        boxShadow: "5px 5px 5px #888888"
    }
};