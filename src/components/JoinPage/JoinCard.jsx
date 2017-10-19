import React, { Component } from 'react';
import InputLabel from '../InputLabel.jsx';
import {
    CognitoUserPool
} from "amazon-cognito-identity-js";
import { cognitoConfig as config } from '../../secrets/cognitoConfig.js';

class JoinCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            JoinName: '',
            JoinEmail: '',
            JoinPassword: '',
            ConfirmJoinPassword: '',
            JoinBlurb: '',
            JoinTerms: false,
            NameError: false,
            EmailError: false,
            PasswordError: false,
            BlurbError: false,
            TermsError: false
        };
        // this.submit = this.submit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    validateInformation() {
        let validName = this.validateName();
        let validEmail = this.validateEmail();
        let validPassword = this.validatePassword();
        let validBlurb = this.validateBlurb();
        let validTerms = this.state.JoinTerms;

        if (validTerms && validName && validEmail && validBlurb && validPassword) {
            let submitInfo = {};
            let name = this.state.JoinName.split(' ');
            submitInfo.firstName = name[0];
            submitInfo.lastName = name[1];
            submitInfo.email = this.state.JoinEmail;
            submitInfo.password = this.state.JoinPassword;
            submitInfo.blurb = this.state.JoinBlurb;
            submitInfo.terms = this.state.JoinTerms;
            console.log(submitInfo);
        }
        else {
            alert('Please correct the hilighted information below');
        }
        this.setState({ ...this.state, TermsError: !validTerms, NameError: !validName, EmailError: !validEmail, PasswordError: !validPassword, BlurbError: !validBlurb });
    }
    validateName() {
        return (this.state.JoinName.split(' ').length === 2);
    }
    validateEmail() {
        let reg = /\S+@\S+\.\S+/;
        return reg.test(this.state.JoinEmail);
    }
    validatePassword() {
        if (this.state.JoinPassword.length < 8 || this.state.JoinPassword !== this.state.ConfirmJoinPassword) {
            return false;
        }
        return true;
    }
    validateBlurb() {
        return (this.state.JoinBlurb.length > 20);
    }
    handleChange(e) {
        if (e.target.type === 'checkbox') {
            this.setState({
                [e.target.id]: e.target.checked
            });
        }
        else {
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        if (this.validateInformation()) {
            this.setState({ isLoading: true });
            try {
                const newUser = await this.signUp(this.state.JoinEmail, this.state.JoinPassword);
                this.setState({
                    newUser: newUser
                });
            } catch (e) {
                alert(e);
            }
            this.setState({ isLoading: false });
        };
    }

    signUp(email, password) {
        const userPool = new CognitoUserPool({
            UserPoolId: config.userPoolId,
            ClientId: config.clientId
        });

        return new Promise((resolve, reject) =>
            userPool.signUp(email, password, [], null, (err, result) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(result.user);
            })
        );
    }
    render() {
        return (
            <div className='JoinCard'>
                <h3>Would you like to join our study?</h3>
                <p>Please enter your information below </p>
                <form id='JoinStudyForm'>
                    <InputLabel id={'JoinName'} type={'text'} labelText={'First and Last name: '} value={this.state.JoinName} error={this.state.NameError} onChange={this.handleChange} />
                    <InputLabel id={'JoinEmail'} type={'email'} labelText={'Email: '} value={this.state.JoinEmail} error={this.state.EmailError} onChange={this.handleChange} />

                    <InputLabel id={'JoinPassword'} type={'password'} labelText={'Password: '} value={this.state.JoinPassword} onChange={this.handleChange} />
                    <InputLabel id={'ConfirmJoinPassword'} type={'password'} labelText={'Confirm Password: '} value={this.state.ConfirmJoinPassword} onChange={this.handleChange} />

                    <InputLabel id={'JoinBlurb'} type={'textarea'} labelText={'Briefly, tell us about yourself (20 character min.)'} value={this.state.JoinBlurb} error={this.state.BlurbError} onChange={this.handleChange} />
                    <InputLabel id={'JoinTerms'} type={'checkbox'} labelText={'Check the box to accept the Terms of Service'} value={this.state.JoinTerms} error={this.state.TermsError} onChange={this.handleChange} />
                    <p>TERMS OF SERVICE GO HERE. WORDS WORDS WORDS.</p>
                    <button onClick={this.handleSubmit}>Submit!</button>
                </form>
            </div>
        )
    }
}



export default JoinCard