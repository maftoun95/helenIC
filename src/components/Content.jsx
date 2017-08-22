import React, { Component } from 'react';
import ContentItem from './ContentItem';
import './homepage.css';


export default class Content extends Component {
    render() {
        return (
        <div className="content">
            <ContentItem className="contentItem" />
            <ContentItem className="contentItem" />
            <ContentItem className="contentItem" />
        </div>);
    }
};

const contentStyles = {
    content: {
        display: 'flex'
    }
};