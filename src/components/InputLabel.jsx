import React from 'react';
import PropTypes from 'prop-types';

export default class InputLabel extends React.Component {
    render() {
        let errorClass = this.props.error ? 'error' : '';
        if (this.props.type === 'textarea') {
            return (
                <div className={`TextareaLabel ${errorClass}`}>
                    <label htmlFor={this.props.id}>{this.props.labelText}</label>
                    <textarea id={this.props.id} rows='10' cols='50' value={this.props.value} onChange={this.props.onChange}></textarea>
                </div>
            )
        }
        if (this.props.type === 'checkbox') {
            return (
                <div className={`InputLabel ${errorClass}`}>
                    <label htmlFor={this.props.id}>{this.props.labelText}</label>
                    <input id={this.props.id} type={this.props.type} checked={this.props.checked} onChange={this.props.onChange} />
                </div>
            )
        }
        return (
            <div className={`InputLabel ${errorClass}`}>
                <label htmlFor={this.props.id}>{this.props.labelText}</label>
                <input id={this.props.id} type={this.props.type} onChange={this.props.onChange} />
            </div>
        );
    }
}

InputLabel.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    error: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    checked: PropTypes.string
}