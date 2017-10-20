import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

class Accordion extends Component {
    constructor() {
        super();
        this.renderPosts = this.renderPosts.bind(this);
    }
    renderPosts(key) {
        return (<AccordionItem key={key} index={key} details={this.props.accordionData[key]} />)
    }
    render() {
        return (
            <div>
                <div className="accordion-container">
                    {Object.keys(this.props.accordionData).map(this.renderPosts)}
                </div>
            </div>
        )
    }
}
export default Accordion;
