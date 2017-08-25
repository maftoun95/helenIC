import React from 'react';
import { Player } from 'video-react';

import "./../../node_modules/video-react/dist/video-react.css";

const VideoPlayer = (props) => {
    return (
        <Player
            playsInline
            poster="/assets/poster.png"
            src={props.video}
        />
    );
};

export default VideoPlayer