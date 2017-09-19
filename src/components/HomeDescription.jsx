import React from 'react';
import Image from '../components/Image.jsx';

export default class HomeDescription extends React.Component{
    render(){
        return(
            <div className={'HomeDescription'}>
                <h2>FINDING A WAY TO BE FREE FROM PAIN</h2>
                <Image className={'HomeDescriptionImage'} image={'../../pictures/helen_image.PNG'}/>
                <p><span>This is a website unlike any other you've ever discovered.</span></p>
                <p>This site offers a <span>cohesive biological hypothesis</span> as to a cause of or a contributing factor to the following debilitating conditions: </p>
                <ul>
                    <li>
                        Painful Bladder Syndrome/Interstitial Cystitis
                    </li>
                    <li>
                        Chronic Pelvic Pain Syndrome/Chronic Prostatitis not related to prostate overgrowth
                    </li>
                    <li>
                        "Leaky Gut" Syndrome (also possibly irritable bowel syndrome/Chrohn's disease and ulcerative colitis)
                    </li>
                </ul>
                <p>My Supposition is that epithelial hyper-permeability disorders may have a foundation in the same and in parallel genetically-based metabolic dysfunctions, with individual environmental, physical, dietary, and lifestyle factors affecting their manifestation.</p>
                <p>This theory is the result of four years of diligent research and experimentation to bring clarity and resolution to my own health issues.</p>
                <p>Based on what I learned about the relevant dynamics, I institued a specific lifestyle and nutritional protocol designed to decrease the negative impact of these factors and to increase my physical well-being.</p>
            </div>
        )
    }
}