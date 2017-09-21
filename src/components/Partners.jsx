import React from 'react';

import Card from './Card';

class Partners extends React.Component {
    render() {
        return (
            <div className="partnersWrapper">
                <div className="partnersContent">
                    <h3>Partners</h3>
                    <div className="partnerRow">
                        <Card
                            title="Mr & Mrs. Smith"
                            className="partnersCard"
                            image={'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'}
                            information={["dolla dolla bill yall"]}
                        />
                        <Card
                            title="Mr & Mrs. Smith"
                            className="partnersCard"
                            image={'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'}
                            information={["dolla dolla bill yall"]}
                        />
                        <Card
                            title="Mr & Mrs. Smith"
                            className="partnersCard"
                            image={'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'}
                            information={["words words words words words words words words words words words words words words words words words words words words words words words words words words words words words "]}
                        />
                    </div>
                    <div className="partnerRow">
                        <Card
                            title="Mr & Mrs. Smith"
                            className="partnersCard"
                            image={'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'}
                            information={["dolla dolla bill yall", "Helen words"]}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Partners;