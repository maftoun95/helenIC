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
					information={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
				/>
				<Card
					title="Mr & Mrs. Smith"
					className="partnersCard"
					image={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
					information={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
				/>
				<Card
					title="Mr & Mrs. Smith"
					className="partnersCard"
					image={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
					information={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
				/>
			</div>
			<div className="partnerRow">
				<Card
					title="Mr & Mrs. Smith"
					className="partnersCard"
					image={"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"}
					information={"A different one ipsum dolor sit amet, consectetur adipisicing elit."}
				/>
			</div>
		</div>

	);
};

export default Partners;
