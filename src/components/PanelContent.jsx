import React from "react";
import Image from './Image.jsx'

const PanelContent = props => {
	const hasImage = props.image
	const renderItems = (items) => {
		const listItems = items.map((item, i) => {
			if (i === 0) {
				return (
					<h1 key={i}>{item}</h1>
				)
			}
			else {
				return (
					<p key={i}>{item}</p>
				)
			}
		})
		return (
			<div className="researchContentInformation">
				{listItems}
				<button className="researchButtonLink">{props.buttonContent}</button>
			</div>
		)
	}
	if (hasImage) {
		return (
			<div className={props.className}>
				{renderItems(props.content)}

				<Image
					image={props.image}
				/>

			</div>
		)
	}
	return (
		<p className={props.className}>{props.content}</p>

	)
};
export default PanelContent;
