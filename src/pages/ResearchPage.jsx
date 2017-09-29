import "../css/Research.css";
import React from 'react';

import PanelSection from './../components/PanelSection.jsx';
import Disclaimer from './../components/Disclaimer.jsx'
const ResearchPage = () => {
	return (
		<div className="researchWrapper">
			<PanelSection
				panelHeader="Our Research"
				panelContent={["Hypothesis", "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words "]}
				panelContentImage={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
				panelButton="Click Here"
			/>
			<hr className="horizontalRow" />
			<PanelSection
				panelContent={["Research description", "words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words words "]}
				panelContentImage={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
				panelButton="Click Here"
			/>
			<PanelSection
				panelHeader="Want to get involed? Join us!"
				panelButton="Join"
			/>
			<Disclaimer />
		</div>
	)
}

export default ResearchPage;