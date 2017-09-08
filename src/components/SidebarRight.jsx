import React, { Component } from 'react';
import WordsPost from './WordsPost.jsx';

export default class SidebarLeft extends Component {
    render(){
        return (
            <div className={this.props.className}>
                <WordsPost date={fry.word1.date} text={fry.word1.text} className={'wordsPost'}/>
                <WordsPost date={fry.word2.date} text={fry.word1.text} className={'wordsPost'}/>
                <WordsPost date={fry.word3.date} text={fry.word1.text} className={'wordsPost'}/>
                <WordsPost date={fry.word4.date} text={fry.word1.text} className={'wordsPost'}/>
            </div>
        )
    }
}

const fry = {
    word1: {
        date: '11/31/17',
        text: 'This is a sample post from Helen. It contains words. Good things go here. They are encouraging. You are reading them right now. You feel better. You are now posessed with the spirit of the warrior. Go team.'
    },
    word2: {
        date: '12/04/17',
        text: 'This is a sample post from Helen. It contains words. Good things go here. They are encouraging. You are reading them right now. You feel better. You are now posessed with the spirit of the warrior. Go team.'
    },
    word3: {
        date: '12/16/17',
        text: 'This is a sample post from Helen. It contains words. Good things go here. They are encouraging. You are reading them right now. You feel better. You are now posessed with the spirit of the warrior. Go team.'
    },
    word4: {
        date: '12/27/17',
        text: 'This is a sample post from Helen. It contains words. Good things go here. They are encouraging. You are reading them right now. You feel better. You are now posessed with the spirit of the warrior. Go team.'
    }
};