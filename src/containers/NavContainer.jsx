import React, { Component } from 'react';
import Image from './../components/Image.jsx';
import NavLink from './../components/NavLink.jsx';

export default class NavContainer extends Component {
    render() {
        return (
            <div className={'navWrapper'}>
                <Image className={'navImage'} image={"../../pictures/master_logo.jpg"}/>
                <div className={'linksBar'}>
                    <NavLink className={'link'} linkTo={'/'} link={'Home'} />
                    <NavLink className={'link'} linkTo={'About'} link={'About'} />
                    <NavLink className={'link'} linkTo={'Contact'} link={'Contact'} />
                    <NavLink className={'link'} linkTo={'Log In'}link={'Login'} />
                </div>
            </div>
        )
    }
}
