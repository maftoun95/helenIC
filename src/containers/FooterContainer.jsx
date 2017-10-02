import React, { Component } from 'react';
import Disclaimer from '../components/Disclaimer.jsx';
import '../css/Footer.css';

export default class FooterContainer extends Component {
    render() {
        return (
            <div className={'footer'}>
                <Disclaimer className='disclaimer'/>
                <p>©  TX Genetic Research, LLC, All Rights Reserved</p>
            </div>
        )
    }
}
