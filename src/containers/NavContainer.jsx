import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from './../components/Image.jsx';
import NavLink from './../components/NavLink.jsx';

export default class NavContainer extends Component {
    render() {
        return (
            <div className={'navWrapper'}>
                <Link to='/'>
                    <Image className={'navImage'} image={"../../pictures/master_logo.jpg"} />
                </Link>
                <div className={'linksBar'}>
                    <NavLink className={'link'} linkTo={'Journey'} link={'Journey'} />
                    <NavLink className={'link'} linkTo={'About'} link={'About'} />
                    <NavLink className={'link'} linkTo={'Research'} link={'Research'} />
                    <NavLink className={'link'} linkTo={'Join'} link={'Join'} />
                    <NavLink className={'link'} linkTo={'Login'} link={'Login'} />
                    <NavLink className={'link'} linkTo={'Signin'} link={'Sign In'} />
                </div>
            </div>
        )
    }
}
