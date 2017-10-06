import React from "react";
import Image from './Image.jsx';

const ImagePanel = props => {
	return (
        <div className="ImagePanelWrapper">
            <div className={"ImagePanelHeader"}>{props.textArray[0]}</div>
            <div className={"ImagePanelText"}>{props.textArray[1]}</div>
            <Image className={'ImagePanelImage'} image={props.image} />




        </div>
    )
};
export default ImagePanel;

//             <div className={"ImagePanelImage"}>{props.image}</div>