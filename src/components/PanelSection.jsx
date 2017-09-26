import React from "react";

import PanelHeader from "./PanelHeader.jsx";
import PanelContent from "./PanelContent.jsx";
import Partner from "./Partners.jsx";

const PanelSection = props => {
	const hasPartner = props.partner;
	const hasButton = props.panelButton;
	const hasImage = props.panelContentImage;
	const hasHeader = props.panelHeader;
	if (hasImage && hasButton) {
		if (hasHeader) {
			return (
				<div className="panel">
					<PanelHeader
						title={props.panelHeader}
						className="panelHeader"
					/>
					<PanelContent
						className="researchContent"
						content={props.panelContent}
						image={props.panelContentImage}
						buttonContent={props.panelButton}
					/>
				</div>
			)
		}
		else {
			return (
				<div className="panel">
					<PanelContent
						className="researchContent"
						content={props.panelContent}
						image={props.panelContentImage}
						buttonContent={props.panelButton}
					/>
				</div>
			)
		}
	}

	else if (hasPartner) {
		return (
			<div className="panel">
				<PanelHeader title={props.panelHeader} className="panelHeader" />
				<Partner />
			</div>
		);
	}
	else if (hasButton) {
		return (
			<div className="panel">
				<PanelHeader
					title={props.panelHeader}
					className="panelLinkToStory"
					buttonContent={props.panelButton}
				/>
			</div>
		)
	}

	return (
		<div className="panel">
			<PanelHeader title={props.panelHeader} className="panelHeader" />
			<PanelContent content={props.panelContent} className="panelContent" />
		</div>
	);
};
export default PanelSection;
