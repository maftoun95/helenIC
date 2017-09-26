import React from "react";

const Information = props => {
	return (
		<div className={props.className}>
			<p>{props.information}</p>
		</div>
	);
};

export default Information;
