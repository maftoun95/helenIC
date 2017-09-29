import React, { Component } from 'react';
import Image from './Image';


export default class UserCard extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        event.preventDefault();
        const button = event.target;
        
    }
    render() {
        return (
            <div className={this.props.className}>
                <Image
                    image={this.props.image}
                />
                <div className={'idText'}>
                    <h3>usernamecodename</h3>
                    <h4>Test Number 52671</h4>
                    <h5>account@email.com</h5>
                </div>
                <hr />
                <div className={'logins'}>
                    <br/>
                    <div className={'dates'}>
                        <span className={'loginDate'}>2/16/18</span>
                        <span className={'loginText'}>Last Logged In</span>
                    </div>
                    <div className={'dates'}>
                        <span className={'loginDate'}>2/16/18</span>
                        <span className={'loginText'}>Last Survey Submitted</span>
                    </div>
                </div>
                <hr/>
                <div className={'buttonWrapper'}>
                    <button className={'userPageButton'} onClick={this.handleClick}>View Submissions</button>
                </div>
            </div>
        )
    }
}