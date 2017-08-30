import React, { Component } from 'react';
import ContentItem from '../components/ContentItem';

export default class Content extends Component {
    render() {
        return (
        <div className="content">
            <ContentItem />
            <ContentItem />
            <ContentItem />
        </div>);
    }
};