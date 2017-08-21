import React, { Component } from 'react';
import NavLink from './../components/NavLink'
import Image from './../components/Image'
class FooterContainer extends Component {
    render() {
        return (
            <div>
                <div style={footerStyles.container}>
                    <Image
                        style={footerStyles.image}
                        image={"http://lorempixel.com/200/100"} />
                    <div style={footerStyles.linksBar}>
                        <div style={footerStyles.div}>
                            <h2>Interstitial Cystitis</h2>
                            <NavLink style={footerStyles.link} link={'About Us'} />
                            <NavLink style={footerStyles.link} link={'Contact'} />
                            <NavLink style={footerStyles.link} link={'FAQ'} />
                        </div>
                        <div style={footerStyles.div}>
                            <h2>Lorem Ipsum</h2>
                            <NavLink style={footerStyles.link} link={'Lorem Ipsum'} />
                            <NavLink style={footerStyles.link} link={'Contact'} />
                            <NavLink style={footerStyles.link} link={'Lorem Ipsum'} />
                        </div>
                        <div style={footerStyles.div}>
                            <h2>Lorem Ipsum</h2>
                            <NavLink style={footerStyles.link} link={'Lorem Ipsum'} />
                            <NavLink style={footerStyles.link} link={'Lorem Ipsum'} />
                            <NavLink style={footerStyles.link} link={'Lorem Ipsum'} />
                        </div>
                    </div>
                </div>
                <div style={footerStyles.bottomFooter}>
                    <p>Copyright 2017 - Interstitial Cystitis - All Rights Reserved</p>
                </div>
            </div>
        )
    }
}
const footerStyles = {
    container: {
        backgroundColor: "#353941",
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
}

export default FooterContainer