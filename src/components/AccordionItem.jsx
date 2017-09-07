import React, { Component } from 'react';
import TextArea from './TextArea'
class AccordionItem extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            content: ""
        }
        this.toggle = this.toggle.bind(this);
        this.handleCommentsChange = this.handleCommentsChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    toggle() {
        this.setState({
            active: !this.state.active,
            class: "active"
        });
    }
    handleCommentsChange(e) {
        this.setState({ content: e.target.value })
    }
    handleFormSubmit(e) {
        e.preventDefault();
        const formPayload = {
            content: this.state.content,
        }
        alert(formPayload.content)
        this.handleClearForm(e);
    }
    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            content: ""
        })
    }
    render() {
        const activeClass = this.state.active ? "active" : "inactive";
        const post = this.props.details;
        const textareaClass = activeClass + " accordion-formarea"
        return (
            <div
                className={activeClass}
                onClick={this.toggle}
            >
                <button className="accordion-button">+</button>
                <span className="summary">{post.summary}</span>
                <span className="folding-panel answer">{post.answer}</span>
                <form
                    onSubmit={this.handleFormSubmit}
                    className={textareaClass}
                >
                    <TextArea
                        className="accordion-textarea"
                        rows={5}
                        cols={100}
                        resize={false}
                        content={this.state.content}
                        name={'comments'}
                        controlFunc={this.handleCommentsChange}
                        placeholder={'comments'}
                    />
                    <input
                        className="accordion-submitComment"
                        type="submit"
                        value="submit" />
                </form>
            </div>
        )
    }
}


export default AccordionItem;