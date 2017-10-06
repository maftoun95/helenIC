import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Join.css';

export default class JoinPage extends React.Component {
    render() {
        return (
            <div>
                <div className='SignInHeader'>
                    <h2 className='SignInHeader'>JOIN THE CAUSE</h2>
                </div>
                <div className='JoinCardContainer'>
                    <div className='JoinCard'>
                        <h3>Are you interested in being a part of this study?</h3>
                        <Link to={'/'}>
                            <button className='StandardButton'>CLICK HERE</button>
                        </Link>
                        
                    </div>
                    <div className='JoinCard'>
                        <h3>Are you a health care provider that is interested in learning more?</h3>
                        <Link to={'/'}><button className='StandardButton'>CLICK HERE</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
