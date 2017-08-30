import React, { Component } from 'react';
import SingleInput from './../components/SingleInput'
import TextArea from './../components/TextArea'
import Information from './../components/Information';

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            comments: "",
            email: "",
            people: []
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }
    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value })
    }
    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value })
    }
    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    handleCommentsChange(e) {
        this.setState({ comments: e.target.value })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const formPayload = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            comments: this.state.comments,
        }
        let people = this.state.people;
        people.push(formPayload)
        this.handleClearForm(e);

    }
    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            comments: ""
        })
    }
    render() {
        return (
            <div className="container">
                <h2>Contact</h2>
                <Information
                    className="contact-info"
                    information="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <form onSubmit={this.handleFormSubmit}>
                    <SingleInput
                        inputType={'text'}
                        title={'First Name'}
                        name={'firstName'}
                        controlFunc={this.handleFirstNameChange}
                        content={this.state.firstName}
                        placeholder={'First Name'}
                    />
                    <SingleInput
                        inputType={'text'}
                        title={'Last Name'}
                        name={'lastName'}
                        controlFunc={this.handleLastNameChange}
                        content={this.state.lastName}
                        placeholder={'Last Name'}
                    />
                    <SingleInput
                        inputType={'email'}
                        title={'Email'}
                        name={'email'}
                        controlFunc={this.handleEmailChange}
                        content={this.state.email}
                        placeholder={'Email'}
                    />

                    <TextArea
                        title={'Comments'}
                        rows={5}
                        resize={false}
                        content={this.state.comments}
                        name={'comments'}
                        controlFunc={this.handleCommentsChange}
                        placeholder={'comments'}
                    />
                    <input
                        className="contact-button"
                        type="submit"
                        value="submit" />
                </form>
                <div>
                    <h3>Contacts</h3>
                    <ul>
                        {this.state.people.map(({ firstName, lastName, email, comments }, i) => <li key={i}>{firstName} {lastName} {email} {comments}</li>)}
                    </ul>
                </div>
            </div >
        )
    }
}