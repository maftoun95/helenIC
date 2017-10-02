import React from 'react';
import SignInCard from '../components/SignInPage/SignInCard.jsx';
import '../css/SignIn.css';


export default class SignInPage extends React.Component {
    render() {
        return (
            <div>
                <div className='SignInHeader'>
                    <h2>SIGN IN</h2>
                </div>
                <SignInCard />
            </div>
        )
    }
}