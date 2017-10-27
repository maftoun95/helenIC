import React, { Component } from 'react';
import { connect } from 'react-redux';
import Accordion from './../Accordion.jsx';

class Submissions extends Component {
    render(){
        if(!this.props.accordionData){
            return(<div></div>)
        }
        return(
            <div>
                <h3>Submissions</h3>
                <Accordion accordionData={this.props.accordionData} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    console.log(state);
    return{
        accordionData: state.userReducer.userData["Submissions"]
    }
}

export default connect(mapStateToProps)(Submissions);