import React, { Component } from 'react';
import Image from './../components/Image.jsx';
import NavLink from './../components/NavLink.jsx';

export default class NavContainer extends Component {
    render() {
        return (
            <div className={'navWrapper'}>
                <Image className={'navImage'} image={"http://lorempixel.com/400/200"}/>
                <div className={'linksBar'}>
                    <NavLink className={'link'} linkTo={'/'} link={'Home'} />
                    <NavLink className={'link'} linkTo={'About'} link={'About Us'} />
                    <NavLink className={'link'} linkTo={'Contact'} link={'Contact'} />
                    <NavLink className={'link'} linkTo={'Products'}link={'Products'} />
                </div>
                <NavLink className={'signUp'} linkTo={'Signup'} link={'Sign Up / In'}/>
            </div>
        )
    }
}
