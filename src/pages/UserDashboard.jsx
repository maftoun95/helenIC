import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import SidebarLeft from '../components/SidebarLeft.jsx';
import SidebarRight from '../components/SidebarRight.jsx';
import CenterDashboard from '../components/CenterDashboard.jsx';
import '../css/UserDashboard.css';

//done
import Submissions from '../components/UserDashboard/Submissions.jsx';
//wip
import Nutrition from '../components/UserDashboard/Nutrition.jsx';
import LowPhenolFoods from '../components/UserDashboard/LowPhenolFoods.jsx';
import MagnesiumSoaks from '../components/UserDashboard/MagnesiumSoaks.jsx';
import TestResults from '../components/UserDashboard/TestResults.jsx';
import WordsFromHelen from '../components/UserDashboard/WordsFromHelen.jsx';
import AccountSettings from '../components/UserDashboard/AccountSettings.jsx';


class UserDashboard extends Component {
    render() {
        const tabs = [
            {
                to: 'Submissions',
                link: 'Submissions'
            },
            {
                to: 'Nutrition',
                link: 'Food, Water, Exercise & Supplement Requirements'
            },
            {
                to: 'LowPhenolFoods',
                link: 'Low Phenol Foods'
            },
            {
                to: 'MagnesiumSoaks',
                link: 'Magnesium Soaks'
            },
            {
                to: 'TestResults',
                link: 'Test Results'
            },
            {
                to: 'WordsFromHelen',
                link: 'Words From Helen'
            },
            {
                to: 'AccountSettings',
                link: 'Account Settings'
            },
            
        ];
        //return to this.props.loggedIn
        return (
            this.props ?
                <div className={'userDashboard'}>
                    <SidebarLeft className={'leftSidebar'} tabs={tabs} />
                    <div className={'userDashboardContent'} >
                        <Route path='/UserDashboard/Submissions' component={Submissions} />
                        <Route path='/UserDashboard/Nutrition' component={Nutrition} />
                        <Route path='/UserDashboard/LowPhenolFoods' component={LowPhenolFoods} />
                        <Route path='/UserDashboard/MagnesiumSoaks' component={MagnesiumSoaks} />
                        <Route path='/UserDashboard/TestResults' component={TestResults} />
                        <Route path='/UserDashboard/WordsFromHelen' component={WordsFromHelen} />
                        <Route path='/UserDashboard/AccountSettings' component={AccountSettings} />
                    </div>
                </div> :
                <Redirect to='/' />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.userReducer.loggedIn
    }
}

export default connect(mapStateToProps)(UserDashboard);