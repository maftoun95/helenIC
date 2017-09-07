import React, { Component } from 'react';

export default class SidebarLeft extends Component {
    render(){
        return (
          <div className={this.props.className}>
            <div>Hello from right Sidebar</div>
          </div>
        )
    }
}
