import React,{Component} from 'react';
import './section-hero.css';
import heroVideo from '../../assets/0000-0037.mp4';

class SectionHero extends Component {
    // lower numbers = faster playback
    playbackConst = 800;
    componentDidMount = () => {
        // get page height from video duration
        var heroWrapper = document.getElementsByClassName("hero-wrapper")[0];
        // select video element         
        var video = document.getElementById('video-hero'); 
        // var video = $('#v0')[0]; // jquery option
        console.log(heroWrapper,heroWrapper.style)
        const playbackConst = this.playbackConst;
        // dynamically set the page height according to video length
        video.addEventListener('loadedmetadata', function() {
            heroWrapper.style.height = video.duration * playbackConst+500 + "px";
        });
        window.requestAnimationFrame(this.scrollPlay);
    }

    scrollPlay = () => {       
        var video = document.getElementById('video-hero');
        var frameNumber  = window.pageYOffset/this.playbackConst;
        video.currentTime  = frameNumber;

        window.requestAnimationFrame(this.scrollPlay);
    }
    render() {
        return(
            <div className="hero-wrapper">
                <video id="video-hero" src={heroVideo}></video>
                <div className="hero-text" id="hero-name">
                    myPhone SE
                </div>
            </div>
        )
    }
}

export default SectionHero;