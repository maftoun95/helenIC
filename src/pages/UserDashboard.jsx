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
        const tabs = [{
            to: 'Submissions',
            link: 'Submissions'
        }];
        return (
            this.props.loggedIn ?
                <div className={'userDashboard'}>
                    <SidebarLeft className={'leftSidebar'} tabs={ tabs } />
                    <Route path='/UserDashboard/Submissions' component={Submissions} />
                    <SidebarRight className={'rightSidebar'} />
                </div> :
                <Redirect to='/' />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps)(UserDashboard);