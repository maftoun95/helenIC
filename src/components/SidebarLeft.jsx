import React, { Component } from 'react';
import NavLink from './NavLink.jsx';

export default class SidebarLeft extends Component {
    render() {
        const tabsList = this.props.tabs.map(function(tab, index){
            return <li key={ index }> <NavLink className={'userDashboardNav'} linkTo={`/UserDashboard/${tab}`} link={ tab } /> </li>
        })
        return (
            <div className={this.props.className}>
                <ul>
                    { tabsList }
                </ul>
            </div>
        )
    }
}