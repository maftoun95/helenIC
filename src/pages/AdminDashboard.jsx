import React, { Component } from 'react';
import SidebarLeft from '../components/SidebarLeft.jsx';
import AdminSidebar from '../components/AdminSidebar.jsx';
import CenterDashboard from '../components/CenterDashboard.jsx';
// NOTE: Currently pulling the user dashboard css file
import './AdminDashboard.css';
import Participants from '../containers/Participants.jsx';

export default class UserDashboard extends Component {
    render(){
        return(
            <div className={'adminDashboard'}>
                <AdminSidebar className={'adminSidebar'} />
                <Participants />
            </div>
        )
    }
}