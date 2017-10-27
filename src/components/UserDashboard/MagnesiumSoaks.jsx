import React, { Component } from 'react';
import { connect } from 'react-redux';
import Accordion from './../Accordion.jsx';


class MagnesiumSoaks extends Component {
    render(){
        if(!this.props.accordionData){
            return(<div></div>)
        }
        return(
            <div>
                <h3>Magnesium Soaks</h3>
                <Accordion accordionData={this.props.accordionData} />
            </div>
        )
    }
}


function mapStateToProps(state, ownProps){
    return{
        accordionData: state.userReducer.userData["MagnesiumSoaks"]
    }
}

export default connect(mapStateToProps)(MagnesiumSoaks);