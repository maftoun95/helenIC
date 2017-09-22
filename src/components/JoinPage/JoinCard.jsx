import React from 'react';
import InputLabel from '../InputLabel.jsx';

export default class JoinCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            JoinName: '',
            JoinEmail: '',
            JoinBlurb: '',
            JoinTerms: false,
            NameError: false,
            EmailError: false,
            BlurbError: false,
            TermsError: false
        };
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    validateInformation() {
        let validName = this.validateName();
        let validEmail = this.validateEmail();
        let validBlurb = this.validateBlurb();
        let validTerms = this.state.JoinTerms;

        if (validTerms && validName && validEmail && validBlurb) {
            let submitInfo = {};
            let name = this.state.JoinName.split(' ');
            submitInfo.firstName = name[0];
            submitInfo.lastName = name[1];
            submitInfo.email = this.state.JoinEmail;
            submitInfo.blurb = this.state.JoinBlurb;
            submitInfo.terms = this.state.JoinTerms;
            console.log(submitInfo);
        }
        else {
            alert('Please correct the hilighted information below');
        }
        this.setState({ ...this.state, TermsError: !validTerms, NameError: !validName, EmailError: !validEmail, BlurbError: !validBlurb });
    }
    validateName() {
        return (this.state.JoinName.split(' ').length === 2);
    }
    validateEmail() {
        let reg = /\S+@\S+\.\S+/;
        return reg.test(this.state.JoinEmail);
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
    submit(e) {
        console.log(this);
        e.preventDefault();
        this.validateInformation();
    }
    render() {
        return (
            <div className='JoinCard'>
                <h3>Would you like to join our study?</h3>
                <p>Please enter your information below </p>
                <form id='JoinStudyForm'>
                    <InputLabel id={'JoinName'} type={'text'} labelText={'First and Last name: '} value={this.state.JoinName} error={this.state.NameError} onChange={this.handleChange} />
                    <InputLabel id={'JoinEmail'} type={'email'} labelText={'Email: '} value={this.state.JoinEmail} error={this.state.EmailError} onChange={this.handleChange} />
                    <InputLabel id={'JoinBlurb'} type={'textarea'} labelText={'Briefly, tell us about yourself (20 character min.)'} value={this.state.JoinBlurb} error={this.state.BlurbError} onChange={this.handleChange} />
                    <InputLabel id={'JoinTerms'} type={'checkbox'} labelText={'Check the box to accept the Terms of Service'} value={this.state.JoinTerms} error={this.state.TermsError} onChange={this.handleChange} />
                    <p>TERMS OF SERVICE GO HERE. WORDS WORDS WORDS.</p>
                    <button onClick={this.submit}>Submit!</button>
                </form>
            </div>
        )
    }
}