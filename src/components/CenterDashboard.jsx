import React, { Component } from 'react';
import { connect } from 'react-redux';
import Accordion from './Accordion';
import Survey from './Survey'

class CenterDashboard extends Component {
    render() {
        if (!this.props.accordionData) {
            return (<div></div>)
        }
        return (
            <div className={this.props.className}>
                <Survey />
                <Accordion accordionData={this.props.accordionData} />
                <div className="centerdashboard-bottom">
                    <h2>Questions? Concerns? Contact Helen</h2>
                    <h4>helen(at)txresearch.com</h4>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProp) => {
    return {
        accordionData: state.userReducer.userData[state.viewReducer.currentDashboardView]
    }
}

export default connect(mapStateToProps)(CenterDashboard);

// store.viewState.currentDas

// function mapStateToProps(state) {
//     state = {
//         viewstate,
//         userInfo
//     }

//     viewstate = {
//         options: {
//             []categories
//         }
//         return state.userInfo[viewState.selectedCategory]
//     }
//     return
// }