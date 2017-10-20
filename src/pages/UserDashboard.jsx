import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import SidebarLeft from '../components/SidebarLeft.jsx';
import SidebarRight from '../components/SidebarRight.jsx';
import CenterDashboard from '../components/CenterDashboard.jsx';
import '../css/UserDashboard.css';

import Submissions from '../components/Submissions.jsx';

class UserDashboard extends Component {
    render() {
        const tabs = [
            {
                to: 'Submissions',
                link: 'Submissions'
            },
            {
                to: 'MagSoaks',
                link: 'Magnesium Soaks'
            }
        ];
        return (
            this.props.loggedIn ?
                <div className={'userDashboard'}>
                    <SidebarLeft className={'leftSidebar'} tabs={tabs} />
                    <CenterDashboard className={'centerDashboard'} />
                    <SidebarRight className={'rightSidebar'} />
                </div> :
                <Redirect to='/' />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.userReducer.loggedIn
    }
}

export default connect(mapStateToProps)(UserDashboard);