import React from 'react';

const Image = props => (
    <div>
        <img
            style={props.style}
            className={props.className}
            src={props.image}
            alt=""
        />
    </div>
)



export default Image;