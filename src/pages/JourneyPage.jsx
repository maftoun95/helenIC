import React, { Component } from "react";
import PanelSection from "../components/PanelSection.jsx";
import ImagePanel from '../components/ImagePanel.jsx';
import Disclaimer from '../components/Disclaimer.jsx';
import '../css/Journey.css';


const text = {
	panel1: ['Intro header', 'Traditionally, we’ve built and deployed web applications where we have some degree of control over the HTTP requests that are made to our server. Our application runs on that server and we are responsible for provisioning and managing the resources for it. There are a few issues with this.'],
	panel2:{
		header: 'first continuation',
		content: 'first paragraph'
	}
	,
	panel3: ['nutritional intuition', 'Traditionally, we’ve built and deployed web applications where we have some degree of control over the HTTP requests that are made to our server. Our application runs on that server and we are responsible for provisioning and managing the resources for it. There are a few issues with this.'],
	panel4: ['call to research', 'Traditionally, we’ve built and deployed web applications where we have some degree of control over the HTTP requests that are made to our server. Our application runs on that server and we are responsible for provisioning and managing the resources for it. There are a few issues with this.'],
	panel5: ['first step, call to action', 'Traditionally, we’ve built and deployed web applications where we have some degree of control over the HTTP requests that are made to our server. Our application runs on that server and we are responsible for provisioning and managing the resources for it. There are a few issues with this.']
	,
	panel6: {
		header: 'some trial details',
		content: 'paragraph'
	}
};

const images = {
	helenJourney: '../../pictures/journeyHelen.png',
	pain: '../../pictures/pain.png',
	lab: '../../pictures/lab.png',
	together: '../../pictures/together.png'
};

export default class JourneyPage extends Component {
	render() {
		return (
			<div>
				<ImagePanel 
					textArray={text.panel1} 
					image={images.helenJourney} />
				<PanelSection
					panelHeader={text.panel2.header}
					panelContent={text.panel2.content} />
				<ImagePanel 
					textArray={text.panel3} 
					image={images.pain} />
				<ImagePanel 
					textArray={text.panel4} 
					image={images.lab} />
				<ImagePanel 
					textArray={text.panel5} 
					image={images.together} />
				<PanelSection
					panelHeader={text.panel6.header}
					panelContent={text.panel6.content} />
				<PanelSection
					panelHeader="Want to learn more? Read My Story"
					panelButton="My Story"
				/>
				<Disclaimer />
			</div>
		);
	}
}