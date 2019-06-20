import React, {Component} from 'react';
import './App.css';

class Gallery extends Component {
    constructor(props){
        super(props);
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            });
        } else {
            if(this.state.playingUrl === previewUrl){
                this.state.audio.pause();
                this.setState({
                    playing: false
                });
            } else{
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                });
            }
        }
    }

    render(){
        const {tracks} = this.props;

        if(!tracks){
            return <div>Fetching tracks...</div>;
        }

        return (
            <div>
                 {
                    tracks.map((track, k) => {
                        const trackImg = track.album.images[0].url;
                        return(
                            <div
                                key={k}
                                className="track"
                                onClick={() => this.playAudio(track.preview_url)}
                            >
                                <img 
                                    className="track-img"
                                    src={trackImg} 
                                    alt="track"
                                />
                                <p className="track-text">
                                    {track.name}
                                </p>
                            </div>
                        )
                    })
                }
                        
            </div>
        );
    }
}

export default Gallery;