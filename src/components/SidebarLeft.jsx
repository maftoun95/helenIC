import React, { Component } from 'react';

export default class SidebarLeft extends Component {
    render(){

        return (
          <div className={this.props.className}>
            <ul>
              <li>Dashboard</li>
              <li>Words from Helen</li>
              <li>Account</li>
            </ul>
          </div>
        )
    }
}
