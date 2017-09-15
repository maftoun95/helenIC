import React, { Component } from 'react';

export default class AdminSidebar extends Component {
    render(){

        return (
            <div className={this.props.className}>
                <ul>
                    <li>Dashboard</li>
                    <li>Participants</li>
                    <li>Post News</li>
                </ul>
            </div>
        )
    }
}
