import React from 'react';
import PanelHeader from '../components/PanelHeader.jsx';
import PanelSection from '../components/PanelSection.jsx';
import {PanelContentTripleImage as TrplPanelImage} from '../components/PanelContentTripleImage.jsx';
import PanelBoldTextSingleImage from '../components/PanelBoldTextSingleImage.jsx';

export default class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.images = [{
      image: "../../pictures/bladder.png",
      label: "Painful Bladder Syndrome or Intersitial Cystits"
    },
    {
      image: "../../pictures/pelvis.png",
      label: "Chronic Pelvic Pain Syndrom/Chronic Prostatitis not related to prostate overgrowth"
    },
    {
      image: "../../pictures/gut.png",
      label: "\"Leaky Gut\" Syndrome (also possibly irritable bowel syndrome, Crohn's disease, and ulcerative colitis)"
    }];

    this.firstPanelDescription = "This site offers a cohesive biological hypothesis as to a cause of or a contributing factor to the following debilitating conditions:";

    this.firstPanelDescriptionCont = "My supposition is that hyper-permeability disorders may have a foundation in the same and in parallel genetically-based metabolic dysfunctions, with individual environmental, physical, dietary, and lifestyle factors affecting their manifestation.";

    this.firstPanelHeader = "THIS IS A WEBSITE UNLIKE ANY YOU'VE EVER DISCOVERED";

    this.secondPanelHeader = "THIS THEORY IS THE RESULT OF THREE REAYS OF DILIGENT RESEARCH AND EXPERIMENTATION TO BRING CLARITY AND RESOLUTION TO MY OWN HEALTH ISSUES";

    this.secondPanelText = [
      "Based on what I learned about the relevant dynamics, I instituted a specifici lifestyle and nutritional protocol designed to decrease the negative impact of these factors and to increase my physical well-being.",
      {
        bold: true,
        text: "In 2017 I now live symptom-free, or with only a small amount of discomfort, each and every day."
      },
      "Following this regimen has lowered my daily experience of pain from \"off the scale-of-10 chart\" to alevel of 1 or at most 2.",
      "As long as I am willing to maintain my good health by giving my body what it needs -- and to avoid what it most assuredly doest not need! - I can keep the aching away.",
      "But there were times in the last four years when I despaired of ever being well."
    ]
  }
  render(){
    return(
      <div className={"homePage"}>
        <PanelHeader className={"panelHeader"} title={this.firstPanelHeader}/>
        <TrplPanelImage 
          textAboveClassName={"firstPanelDescription"} 
          textAboveContent={this.firstPanelDescription}
          className={"homePageTripleImage"} images={this.images}  textBelowClassName={"firstPanelDescriptionCont"}
          textBelowContent={this.firstPanelDescriptionCont}
        />
        <PanelHeader className={"panelHeader"} title= {this.secondPanelHeader}/>
        <PanelBoldTextSingleImage className={"secondPanel"}
          textClassName={"secondPanelText"} 
          textContents={this.secondPanelText}/>
        <PanelSection
					panelHeader="LEARN MORE ABOUT MY JOURNEY"
					panelButton="MY JOURNEY"
				/>
      </div>
    )
  }
}