import React, { Component } from 'react';

export default class WordsPost extends Component {
    render(){
        return (
            <div className={this.props.className}>
                <h3>Words from Helen:</h3>
                <h4>{this.props.date}</h4>
                <p>{this.props.text}</p>
                <button>Read More</button>
            </div>
        )
    }
}