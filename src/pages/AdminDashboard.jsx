import React, { Component } from 'react';
import AdminSidebar from '../components/AdminSidebar.jsx';
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