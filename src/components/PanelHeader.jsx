import React from "react";

const PanelHeader = props => {
	const hasButton = props.buttonContent
	if (hasButton) {
		return (
			<div className={props.className}>
				<h3 className="aboutLinkToStory">{props.title}</h3>
				<div className="aboutLinkToStoryButton">{props.buttonContent}</div>
			</div>
		)
	}
	return (
		<div>
			<h3 className={props.className}>{props.title}</h3>
		</div>
	)

}
export default PanelHeader;
