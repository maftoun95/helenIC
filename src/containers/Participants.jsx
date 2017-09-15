import React, { Component } from 'react';
import UserCard from '../components/UserCard.jsx';

export default class Participants extends Component {
    render(){
        return (
            <div className={'participants centerConsole'}>
                <UserCard className={'userCard'} image={'https://s3.amazonaws.com/uifaces/faces/twitter/abinav_t/128.jpg'} />
                <UserCard className={'userCard'} image={'https://s3.amazonaws.com/uifaces/faces/twitter/vista/128.jpg'} />
                <UserCard className={'userCard'} image={'https://s3.amazonaws.com/uifaces/faces/twitter/kareemhmostafa/128.jpg'} />
                <UserCard className={'userCard'} image={'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'} />
                <UserCard className={'userCard'} image={'https://s3.amazonaws.com/uifaces/faces/twitter/idiot/128.jpg'} />
                <UserCard className={'userCard'} image={'https://s3.amazonaws.com/uifaces/faces/twitter/sindresorhus/128.jpg'} />
                <UserCard className={'userCard'} image={'https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg'} />
                <UserCard className={'userCard'} image={'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg'} />
            </div>
        )
    }
}