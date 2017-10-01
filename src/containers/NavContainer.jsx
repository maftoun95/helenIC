import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogout } from '../actions/appActions.js';
import Image from './../components/Image.jsx';
import NavLink from './../components/NavLink.jsx';

class NavContainer extends Component {
    constructor(props){
        super(props);
        this.conditionalLoginRender = this.conditionalLoginRender.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(e){
        e.preventDefault();
        this.props.actions.userLogout();
    }
    conditionalLoginRender(){
        if(this.props.loggedIn){
            return (<span className={'link'} onClick={this.handleLogout}>Sign Out</span>)
        }
        return <NavLink className={'link'} linkTo={'Signin'} link={'Sign In'} />
    }
    render() {
        return (
            <div className={'navWrapper'}>
                <Link to='/'>
                    <Image className={'navImage'} image={"../../pictures/master_logo.jpg"} />
                </Link>
                <div className={'linksBar'}>
                    <NavLink className={'link'} linkTo={'About'} link={'About'} />
                    <NavLink className={'link'} linkTo={'Journey'} link={'Journey'} />
                    <NavLink className={'link'} linkTo={'Research'} link={'Research'} />
                    <NavLink className={'link'} linkTo={'Join'} link={'Join'} />
                    <NavLink className={'link'} linkTo={'Login'} link={'Login'} />
                    {this.conditionalLoginRender()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return{
        loggedIn: state.loggedIn,
        userData: state.userData
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({userLogout}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavContainer);