import React from 'react';

const Rating = (props) => (
    <div>
        <label>{props.title}</label>
        <div className="survey-rating">
            {props.options.map(opt => {
                return (
                    <label key={opt}>
                        <input
                            name={props.setName}
                            onChange={props.controlFunc}
                            value={opt}
                            checked={props.selectedOptions.indexOf(opt) > -1}
                            type={props.type}
                        />
                        {opt}
                    </label>
                )
            })}
        </div>
    </div>
)

export default Rating;