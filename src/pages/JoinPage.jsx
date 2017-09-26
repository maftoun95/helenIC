import React from 'react';
import JoinCard from '../components/JoinPage/JoinCard.jsx';
import LoginCard from '../components/JoinPage/LoginCard';
import '../css/Join.css';

export default class JoinPage extends React.Component {
    render() {
        return (
            <div className='JoinCardContainer'>
                <JoinCard />
                <LoginCard />
            </div>
        )
    }
}
