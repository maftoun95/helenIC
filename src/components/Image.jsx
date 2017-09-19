import React from 'react';

const Image = props => (
    <img
        style={props.style}
        className={props.className}
        src={props.image}
        alt=""
    />
)

export default Image;