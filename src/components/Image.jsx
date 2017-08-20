import React from 'react';

const Image = props => (
    <div>
        <img
            style={props.style}
            src={props.image}
            alt=""
        />
    </div>
)



export default Image