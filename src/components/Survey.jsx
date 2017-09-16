import React, { Component } from 'react';
import Rating from './Rating';
import SingleInput from './SingleInput'

class Survey extends Component {
    constructor() {
        super();
        this.state = {
            painDescription: "",
            painLevel: [1, 2, 3, 4, 5],
            currentPain: ""
        }
        this.handleSurveyChange = this.handleSurveyChange.bind(this)
        this.handlePainDescriptionChange = this.handlePainDescriptionChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleClearForm = this.handleClearForm.bind(this)
    }
    handlePainDescriptionChange(e) {
        this.setState({
            painDescription: e.target.value
        })
    }
    handleSurveyChange(e) {
        console.log(e.target.value)
        this.setState({
            currentPain: e.target.value
        })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const formPayload = {
            painDescription: this.state.painDescription,
            currentPain: this.state.currentPain,
        }
        alert(formPayload)
        this.handleClearForm(e);

    }
    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            painDescription: "",
            currentPain: ""
        })
    }
    render() {
        return (
            <div className="survey-form">
                <form onSubmit={this.handleFormSubmit}>
                    <SingleInput
                        className="form-input"
                        inputType={'text'}
                        title={'Describe your present pain'}
                        name={'firstName'}
                        controlFunc={this.handlePainDescriptionChange}
                        content={this.state.painDescription}
                    />
                    <Rating
                        title={"What's your pain level today?"}
                        setName={'painLevel'}
                        controlFunc={this.handleSurveyChange}
                        type={'radio'}
                        options={this.state.painLevel}
                        selectedOptions={this.state.currentPain || ""}
                    />
                    <input
                        className="survey-submit-button"
                        type="submit"
                        value="submit" />
                </form>
            </div>
        )
    }
}

export default Survey;