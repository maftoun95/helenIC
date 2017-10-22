import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogout } from '../actions/userActions.js';
import Image from './../components/Image.jsx';
import NavLink from './../components/NavLink.jsx';
import '../css/Nav.css';

class NavContainer extends Component {
    constructor(props) {
        super(props);
        this.conditionalSignInRender = this.conditionalSignInRender.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(e) {
        e.preventDefault();
        this.props.actions.userLogout();
    }
    conditionalSignInRender() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <NavLink className={'navLink'} linkTo={'userDashboard'} link={'Home'} />
                    <NavLink className={'navLink'} linkTo={'/About'} link={'About'} />
                    <NavLink className={'navLink'} linkTo={'/Journey'} link={'Journey'} />
                    <NavLink className={'navLink'} linkTo={'/Research'} link={'Research'} />
                    <span className={'navLink'} onClick={this.handleLogout}>Sign Out</span>
                </div>
            )
        }
        return (
            <div>
                <NavLink className={'navLink'} linkTo={'/About'} link={'About'} />
                <NavLink className={'navLink'} linkTo={'/Journey'} link={'Journey'} />
                <NavLink className={'navLink'} linkTo={'/Research'} link={'Research'} />
                <NavLink className={'navLink'} linkTo={'/Join'} link={'Join'} />
                <NavLink className={'navLink'} linkTo={'Signin'} link={'Sign In'} />
            </div>
        )
    }
    render() {
        return (
            <div className={'navWrapper'}>
                <Link to='/'>
                    <Image className={'navImage'} image={"../../pictures/master_logo.jpg"} />
                </Link>
                <div className={'linksBar'}>
                    {this.conditionalSignInRender()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.userReducer.loggedIn,
        userData: state.userReducer.userData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ userLogout }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);