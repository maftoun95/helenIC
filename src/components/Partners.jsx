import React from "react";

import Card from "./Card";

const Partners = props => {
	return (

		<div className="partnersContent">
			<div className="partnerRow">
				<Card
					title="Mr & Mrs. Smith"
					className="partnersCard"
					image={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
					information={"dolla dolla bill yall"}
				/>
				<Card
					title="Mr & Mrs. Smith"
					className="partnersCard"
					image={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
					information={"dolla dolla bill yall"}
				/>
				<Card
					title="Mr & Mrs. Smith"
					className="partnersCard"
					image={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
					information={
						"words words words words words words words words words words words words words words words words words words words words words words words words words words words words words "
					}
				/>
			</div>
			<div className="partnerRow">
				<Card
					title="Mr & Mrs. Smith"
					className="partnersCard"
					image={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
					information={"dolla dolla bill yall"}
				/>
			</div>
		</div>

	);
};

export default Partners;
