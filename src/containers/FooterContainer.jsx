import React, { Component } from 'react';
import NavLink from './../components/NavLink'
import Image from './../components/Image'

export default class FooterContainer extends Component {
    render() {
        return (
            <div className='wholeShebang'>
                <div className={'footerContainer'}>
                    <div className={'footerLinksBar'}>
                        <div className={'footerDiv'}>
                            <h2>Interstitial Cystitis</h2>
                            <NavLink className={'footerLink'} linkTo='About' link={'About Us'} />
                            <NavLink className={'footerLink'} linkTo='Contact' link={'Contact'} />
                            <NavLink className={'footerLink'} linkTo='/' link={'FAQ'} />
                        </div>
                        <div className={'footerDiv'}>
                            <h2>Lorem Ipsum</h2>
                            <NavLink className={'footerLink'} linkTo='/' link={'Lorem Ipsum'} />
                            <NavLink className={'footerLink'} linkTo='/' link={'Contact'} />
                            <NavLink className={'footerLink'} linkTo='/' link={'Lorem Ipsum'} />
                        </div>
                        <div className={'footerDiv'}>
                            <h2>Lorem Ipsum</h2>
                            <NavLink className={'footerLink'} linkTo='/' link={'Lorem Ipsum'} />
                            <NavLink className={'footerLink'} linkTo='/' link={'Lorem Ipsum'} />
                            <NavLink className={'footerLink'} linkTo='/' link={'Lorem Ipsum'} />
                        </div>
                    </div>
                </div>
                <div className={'bottomFooter'}>
                    <p>Copyright 2017 - Interstitial Cystitis - All Rights Reserved</p>
                </div>
            </div>
        )
    }
}
