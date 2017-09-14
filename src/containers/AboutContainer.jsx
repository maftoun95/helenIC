import React, { Component } from 'react';
import '../css/About.css';
import Card from './../components/Card';
import VideoPlayer from './../components/VideoPlayer';

export default class AboutContainer extends Component {
    render() {
        return (
            <div className="aboutWrapper">
                <Card
                    className={'card small'}
                    title="About"
                    image={"http://lorempixel.com/200/100"}
                    information="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perspiciatis necessitatibus amet excepturi provident cupiditate dolores unde nobis fugit modi doloremque, ipsa quia sapiente, voluptas rerum, ex corrupti, sint odio."
                />
                <Card
                    className="card small"
                    title="Community"
                    image={"http://lorempixel.com/200/100"}
                    information="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius perspiciatis necessitatibus amet excepturi provident cupiditate dolores unde nobis fugit modi doloremque, ipsa quia sapiente, voluptas rerum, ex corrupti, sint odio."
                />
                <Card
                    className="card large"
                    title="Research"
                    information="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                />
                <VideoPlayer
                    video={"http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov"}
                />
            </div>
        )
    }
}