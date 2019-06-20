import React, {Component} from 'react';
import './App.css';

class Gallery extends Component {
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