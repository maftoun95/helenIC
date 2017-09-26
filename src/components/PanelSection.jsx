import React from "react";

import PanelHeader from "./PanelHeader.jsx";
import PanelContent from "./PanelContent.jsx";
import Partner from "./Partners.jsx";

const PanelSection = props => {
	const hasPartner = props.partner;
	const hasContent = props.panelContent
	if (hasPartner) {
		return (
			<div className="panel">
				<PanelHeader title={props.panelHeader} className="panelHeader" />
				<Partner />
			</div>
		);
	}
	else if (!hasContent) {
		return (
			<div className="panel">
				<PanelHeader
					title={props.panelHeader}
					className="panelLinkToStory"
					button={true}
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
