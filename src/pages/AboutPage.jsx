import '../css/About.css';

import React from 'react';

import Disclaimer from './../components/Disclaimer';
import MissionStatement from './../components/MissionStatement';
import Partner from './../components/Partners';

export default class AboutPage extends React.Component {
    render() {
        return (
            <div className="aboutWrapper">
                <MissionStatement />
                <Partner />
                <Disclaimer className="disclaimer" />
            </div>
        )
    }
}
