import React, { Component } from 'react';
import NavLink from './NavLink.jsx';
import { setCurrentDashboardView } from './../actions/viewActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SidebarLeft extends Component {
    constructor(props) {
        super(props);
        this.tabClickHandler = this.tabClickHandler.bind(this);
        this.buildTabs = this.buildTabs.bind(this);
    }
    tabClickHandler(location) {
        this.props.actions.setCurrentDashboardView(location)
    }
    buildTabs() {
        const tabsList = this.props.tabs.map((tab, index) => {
            return <li key={index} onClick={() => this.tabClickHandler(tab.to)}> <NavLink className={'userDashboardNav'} linkTo={`/UserDashboard/${tab.to}`} link={tab.link} /> </li>
        })
        return tabsList;
    }
    render() {
        return (
            <div className={this.props.className}>
                <ul>
                    {this.buildTabs()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ setCurrentDashboardView }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SidebarLeft)