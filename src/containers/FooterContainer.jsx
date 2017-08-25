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
                            <NavLink className={'footerLink'} link={'About Us'} />
                            <NavLink className={'footerLink'} link={'Contact'} />
                            <NavLink className={'footerLink'} link={'FAQ'} />
                        </div>
                        <div className={'footerDiv'}>
                            <h2>Lorem Ipsum</h2>
                            <NavLink className={'footerLink'} link={'Lorem Ipsum'} />
                            <NavLink className={'footerLink'} link={'Contact'} />
                            <NavLink className={'footerLink'} link={'Lorem Ipsum'} />
                        </div>
                        <div className={'footerDiv'}>
                            <h2>Lorem Ipsum</h2>
                            <NavLink className={'footerLink'} link={'Lorem Ipsum'} />
                            <NavLink className={'footerLink'} link={'Lorem Ipsum'} />
                            <NavLink className={'footerLink'} link={'Lorem Ipsum'} />
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
const footerStyles = {
    container: {
        backgroundColor: "#005050",
        flexDirection: "row",
        width: "80%",
        margin: "0 auto",
        padding: "0 10px 0 10px"
    },
    image: {
        display: 'block',
        margin: '0 auto',
        padding: "1%"
    },
    linksBar: {
        display: 'block',
        margin: '0 auto',
        textAlign: 'center'
    },
    link: {
        display: 'block',
        padding: '10px',
        textDecoration: 'none',
        color: '#8E989E',
    },
    div: {
        display: 'inline-block',
        margin: "2%",
        paddingBottom: "2%"
    },
    bottomFooter: {
        backgroundColor: "#FFFFFF",
        color: 'gray',
        fontSize: "12px",
        width: "100%",
        margin: 0,
        paddingLeft: "10px",
        paddingRight: "10px",
        textAlign: "center"
    }
};
