import React, { Component } from 'react';
import Accordion from './Accordion';
class CenterDashboard extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <Accordion />
            </div>
        )
    }
}

export default CenterDashboard;
