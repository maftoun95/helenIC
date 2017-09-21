import React from 'react';

export default class Disclaimer extends React.Component {
    render() {
        return (
            <div className='Disclaimer'>
                <p>The FDA has not reviewed the contents of this website.  This information is not intended to directly diagnose, treat, or cure any explicit disease, nor does it take place of any medical advice.  This health trial is not funded by a government agency or a research organization.</p>
                <p>This health trial seeks to identify correlations between specific genetic variants and certain phenotypic manifestations and to measure the ability of particular dietary and nutritional supplements to improve well-being as related to the genetic variants.  Genetic variants that affect an individual may not be cured as that term is conventially understood. The negative health impacts that result from some genetic variants may be minimized by improvements in lifstyle and nutritional choices.</p>
            </div>
        );
    }
}