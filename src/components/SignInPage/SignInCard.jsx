import React from 'react';
import {
    CognitoUserPool,
    AuthenticationDetails,
    CognitoUser
} from 'amazon-cognito-identity-js';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { cognitoConfig } from '../../secrets/cognitoConfig.js';
import InputLabel from '../InputLabel.jsx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin, saveUserData, signedInUserDataSuccess } from '../../actions/userActions.js';
import asyncActions from './../../actions/asyncActions'


class SignInCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SignInEmail: '',
            SignInPassword: '',
            EmailError: false,
            PasswordError: false,
            SignInError: false
        }
        this.submit = this.submit.bind(this);
        this.saveUser = this.saveUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateInformation = this.validateInformation.bind(this);
    }

    validateInformation() {
        let validEmail = this.validateEmail();
        let validPassword = this.validatePassword();
        this.setState({ ...this.state, EmailError: !validEmail, PasswordError: !validPassword });
        if (validEmail && validPassword) {
            return true;
        }
        else {
            alert('Please correct the hilighted information below');
            return false;
        }
    }
    validateEmail() {
        if (this.state.SignInEmail) {
            let reg = /\S+@\S+\.\S+/;
            return reg.test(this.state.SignInEmail);
        }
        return false;
    }

    validatePassword() {
        if (this.state.SignInPassword) {
            return (this.state.SignInPassword.length > 5)
        }
        return false;
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    submit() {
        if (this.validateInformation()) {
            const userPool = new CognitoUserPool({
                UserPoolId: cognitoConfig.userPoolId,
                ClientId: cognitoConfig.clientId
            });

            const user = new CognitoUser({
                Username: this.state.SignInEmail,
                Pool: userPool
            });

            const authenticationData = {
                Username: this.state.SignInEmail,
                Password: this.state.SignInPassword
            };

            const authenticationDetails = new AuthenticationDetails(authenticationData);

            return new Promise((resolve, reject) => {
                user.authenticateUser(authenticationDetails, {
                    onSuccess: (result) => {
                        this.setState({
                            SignInError: false,
                        });
                        this.props.actions.userLogin(user);
                        resolve();
                    },
                    onFailure: (err) => {
                        this.setState({
                            SignInError: true
                        });
                        reject(err);
                    }
                })
            });
        }
    }

    saveUser() {
        if (this.props.cogUser.username) {
            return new Promise((resolve, reject) => {
                this.props.cogUser.getUserAttributes((err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        this.props.actions.saveUserData(result);
                        resolve();
                    }
                });
            });
        }
    }
    fetchUserData() {
        // calls asyncAction when user has logged in.
        this.props.actions.asyncGetUserData()
    }
    async handleSubmit(e) {
        e.preventDefault();
        try {
            await this.submit();
            await this.saveUser();
            await this.fetchUserData();
        }
        catch (e) {
            console.log(e);
        }
    }
    render() {

        let signInErrorClass = this.state.SignInError ? 'SignInError' : 'hidden';
        return (
            this.props.loggedIn ?
                <Redirect to='/UserDashboard/Submissions' /> :
                <div className='SignInCard'>
                    <form id='SignInForm'>
                        <InputLabel id={'SignInEmail'} type={'email'} labelText={'Email: '} value={this.state.LoginEmail} error={this.state.EmailError} onChange={this.handleChange} />
                        <InputLabel id={'SignInPassword'} type={'password'} labelText={'Password: '} value={this.state.LoginPassword} error={this.state.PasswordError} onChange={this.handleChange} />
                        <Link className={'ForgotPassword'} to='/'>Forgot Password?   Click Here</Link>
                        <button className='StandardButton' onClick={this.handleSubmit}>Login</button>
                        <label className={signInErrorClass}>Login Error, please check your email and password</label>
                    </form>
                </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        loggedIn: state.userReducer.loggedIn,
        cogUser: state.userReducer.cogUser
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ userLogin, saveUserData, asyncGetUserData: asyncActions.getUserData }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInCard);