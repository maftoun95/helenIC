import React, { Component } from 'react';
import SidebarLeft from '../components/SidebarLeft.jsx';
import SidebarRight from '../components/SidebarRight.jsx';
import CenterDashboard from '../components/CenterDashboard.jsx';
import '../css/UserDashboard.css';

export default class UserDashboard extends Component {
    render(){
        return(
            <div className={'userDashboard'}>
                <SidebarLeft className={'leftSidebar'} />
                <CenterDashboard className={'centerConsole'} />
                <SidebarRight className={'rightSidebar'} />
            </div>
        )
    }
}