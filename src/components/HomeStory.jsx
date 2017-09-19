import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../components/Image.jsx';

export default class HomeStory extends React.Component{
    render(){
        return(
            <div className='HomeStory'>
                <h3>IN 2017 I NOW LIVE SYMPTOM-FREE</h3>
                <p>With only a small amount of discomfort, each and every day, there were times in the last four years when I despaired of ever being well.  With information comes confidence.  With confidence come empowerment.  With empowerment comes solutions.</p>
                <p>If you'd like to read more about me and my experience with intersitial cystitis, click below.</p>
                <Link to={'/about'}><button>Read More</button></Link>
                <Image className={'HomeStoryImage'} image={'../../pictures/master_logo.jpg'}/>
            </div>
        )
    }
}