import "../css/About.css";

import React from "react";

import Disclaimer from "./../components/Disclaimer";
import Partner from "./../components/Partners";
import PanelSection from "./../components/PanelSection.jsx";

export default class AboutPage extends React.Component {
	render() {
		return (
			<div className="aboutWrapper">
				<PanelSection
					panelHeader="Mission"
					panelContent="words words words words words words words words words words words words words words words words words words words words words words words words words words words words words"
				/>
				<PanelSection
					panelHeader="Personnel"
					partner={true}
				/>
				<PanelSection
					panelHeader="Sponsorship"
					panelContent="[Content goes here]"
				/>
				<PanelSection
					panelHeader="Ethical Research Licensing"
					panelContent="[Content goes here]"
				/>
				<PanelSection
					panelHeader="Want to learn more? Read My Story"
				/>
				<Disclaimer className="disclaimer" />
			</div>
		);
	}
}
