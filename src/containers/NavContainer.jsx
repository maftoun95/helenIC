import React, { Component } from 'react';
import Image from './../components/Image.jsx';
import NavLink from './../components/NavLink.jsx';
import SignUp from './../components/SignUp.jsx';
export default class NavContainer extends Component {

    render() {
        return (
            <div className={'navWrapper'}>
                <Image className={'navImage'} image={"http://lorempixel.com/400/200"}/>
                <div className={'linksBar'}>
                    <NavLink className={'link'} link={'Home'} />
                    <NavLink className={'link'} link={'About Us'} />
                    <NavLink className={'link'} link={'Contact'} />
                    <NavLink className={'link'} link={'Products'} />
                </div>
                <SignUp className={'signUp'} />
            </div>
        )
    }
}
const navStyles = {
    container: {
        display: "flex",
        height: '60px',
        backgroundColor: "#005050",
        flexDirection: "row",
        width: "80%",
        margin: "0 auto",
        padding: "10px"
    },
    image: {
        maxWidth: "100%",
        height: "60px",
        marginRight: "40px",
        display: "inline-block",
        overflow: "hidden",
        boxShadow: "5px 5px 5px #888888"
    },
    signUp: {
        width: '130px',
        height: '30px',
        marginTop: '-10px',
        marginLeft: '10%',
        paddingTop: '10px',
        border: '2px solid black',
        borderRadius: '3px',
        backgroundColor: '#fefaff',
        textDecoration: 'none'
    },
    linksBar: {
        height: '40px',
        width: '40%',
        marginLeft: '20%',
        backgroundColor: 'lightgray',
        marginTop: '20px'
    },
    link: {
        lineHeight: '40px',
        width: '23%',
        marginLeft: '2%',
        padding: '10px',
        fontSize: "20px",
        textDecoration: 'none'
    }
}