import React from 'react';

const Image = props => {

    if(props.label){
        return(
        <div>
            <img 
            style={props.style}
            className={props.className}
            src={props.image}
            alt={props.alt || ""}
            />
            <p className={props.labelClassName}>{props.label}</p>
        </div>
        )
    }
    return(
        <img
        style={props.style}
        className={props.className}
        src={props.image}
        alt=""
        />
    )
}

export default Image;