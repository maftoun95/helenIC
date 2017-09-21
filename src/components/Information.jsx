import React from 'react';

const Information = props => {
    return (
        <div className={props.className}>
            {props.information.map(item => <p>{item}</p>)}
        </div>
    )
}

export default Information;