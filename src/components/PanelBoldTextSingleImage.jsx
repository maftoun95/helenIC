import React from 'react';
import Image from '../components/Image.jsx';

class PanelBoldTextSingleImage extends React.Component {
    constructor(props) {
        super(props)
        this.buildText = this.buildText.bind(this);
    }

    buildText(){
        return this.props.textContents.map((contents, i) => {
                if(contents.bold === true){
                    return <p key={i} className="bold">{contents.text}</p>
                }
                else{
                    return <p key={i}>{contents}</p>     
                }
        })
    }
    render() {
        return (
            <div className={this.props.className}>
                <div className={this.props.textClassName}>
                    {this.buildText()}
                </div>
                <Image className={this.props.imageClassName}image={"../../pictures/master_logo.jpg"}/>
            </div>
        )
    }
}

export default PanelBoldTextSingleImage;