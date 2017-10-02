import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import SidebarLeft from '../components/SidebarLeft.jsx';
import SidebarRight from '../components/SidebarRight.jsx';
import CenterDashboard from '../components/CenterDashboard.jsx';
import '../css/UserDashboard.css';

class UserDashboard extends Component {
    render(){
        return (
            this.props.loggedIn ?
                <div className={'userDashboard'}>
                    <SidebarLeft className={'leftSidebar'} />
                    <CenterDashboard className={'centerConsole'} />
                    <SidebarRight className={'rightSidebar'} />
                </div> : 
                <Redirect to='/' />
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        loggedIn : state.loggedIn
    }
}

export default connect(mapStateToProps)(UserDashboard);