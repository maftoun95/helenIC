import React from "react";
import Image from "../components/Image.jsx";
import PropTypes from "prop-types";

export const PanelContentTripleImage = props => {
	return(
		<div className={props.className}>
			<p className={props.textAboveClassName}>{props.textAboveContent}</p>
			<div className={"imageContainer"}>
				<Image image={props.images[0].image} label={props.images[0].label || ""}/>
				<Image image={props.images[1].image} label={props.images[1].label || ""}/>
				<Image image={props.images[2].image} label={props.images[2].label || ""}/>
			</div>
			<p className={props.textBelowClassName}>{props.textBelowContent}</p>
		</div>
	)
};

// images is generally an array of objects with image and label.  However label can be excluded
PanelContentTripleImage.PropTypes = {
	className: PropTypes.string.isRequired,
	textAboveClassName: PropTypes.string,
	textBelowClassName: PropTypes.string,
	textAboveContent: PropTypes.string,
	textBelowContent: PropTypes.string,
	images: PropTypes.array.isRequired
}