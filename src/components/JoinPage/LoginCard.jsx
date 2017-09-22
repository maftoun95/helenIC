import React from 'react';
import InputLabel from '../InputLabel.jsx';

export default class LoginCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            LoginEmail: '',
            LoginPassword: '',
            EmailError: false,
            PasswordError: false
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

     validateInformation() {
        let validEmail = this.validateEmail();
        let validPassword = this.validatePassword();
        if (validEmail && validPassword) {
            let submitInfo = {};
            submitInfo.email = this.state.LoginEmail;
            submitInfo.password = this.state.LoginPassword;
            console.log(submitInfo);
        }
        else {
            alert('Please correct the hilighted information below');
        }
        this.setState({ ...this.state, EmailError: !validEmail, PasswordError: !validPassword});
    }
    validateEmail() {
        let reg = /\S+@\S+\.\S+/;
        return reg.test(this.state.LoginEmail);
    }
    validatePassword(){
        return(this.state.LoginPassword.length > 5)
    }
    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    submit(e) {
        e.preventDefault();
        this.validateInformation();
    }
    render() {
        return (
            <div className='LoginCard'>
                <h3>Already a Member?</h3>
                <p>No Problem, log in below!</p>
                <form id='JoinStudyForm'>
                    <InputLabel id={'LoginEmail'} type={'email'} labelText={'Email: '} value={this.state.LoginEmail} error={this.state.EmailError} onChange={this.handleChange}/>
                    <InputLabel id={'LoginPassword'} type={'password'} labelText={'Password: '} value={this.state.LoginPassword} error={this.state.PasswordError} onChange={this.handleChange}/>
                    <button onClick={this.submit}>Login!</button>
                </form>
            </div>
        )
    }
}