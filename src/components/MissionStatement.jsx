import React from 'react';

import Image from './Image';

const MissionStatement = (props) => (
    <div className="mission">
        <div className="missionContent">
            <h3>Mission</h3>
            <p>Mission statement goes here</p>
        </div>
        <Image className={'missionImage'} image={"../../pictures/master_logo.jpg"} />
    </div>
)
export default MissionStatement;