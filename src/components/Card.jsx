import React from 'react';
import Image from './Image';
import Information from './Information'
const Card = props => {
    const isImage = props.image
    if (isImage) {
        return (
            <div className={props.className}>
                <h2>{props.title}</h2>
                <Image
                    image={props.image}
                />
                <Information
                    information={props.information}
                />
            </div>
        )
    }
    return (
        <div className={props.className}>
            <h2>{props.title}</h2>
            <Information
                information={props.information}
            />

        </div>
    )

}
export default Card;