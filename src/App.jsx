import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';

import Profile from './Profile.jsx';
import './App.css';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: '',
            artist: null,
            tracks: null
        }
    }

    search(){
        const BASE_URL = 'https://api.spotify.com/v1/search?';
        const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
        const ALBUM_URL ='https://api.spotify.com/v1/artists/';
        
        let myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer BQCS9RvcdtAHvK1j8oudGGdiSoNgGr5VgLtj5-7YDIceXTQayR9AcmkdZBF40C96cmUrDDm-IqMztCj2jhNQ_m14bAS3t4cxv9syQWxDadZ-HeYs0mfJpsl8I9krUxDg5jLBX5rOxPOhQg');
        
        let myInit = {
            method: 'GET',
            headers: myHeaders
        };

        let myRequest = new Request(FETCH_URL, myInit);

        fetch(myRequest)
        .then(response => response.json())
        .then(json => {
            const artist = json.artists.items[0];
            this.setState({artist});

            let TOP_TRACKS_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
            let mySecondRequest = new Request(TOP_TRACKS_URL, myInit);
            fetch(mySecondRequest)
            .then(response => response.json())
            .then(json => {
                const { tracks } = json;
                this.setState({tracks});

            });
        });
    }

    render(){
        return (
            <div className="app">
                <div className="app-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="search for an artist"
                            value={this.state.query}
                            onChange={event => { this.setState({query: event.target.value}); }}
                            onKeyPress={event => {
                                if(event.key === 'Enter'){
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Append onClick={() => this.search()}>
                            <Button variant="success">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
                {
                    this.state.artist !== null 
                        ?
                            <div>
                                <Profile 
                                    artist={this.state.artist}
                                />
                                <div className="gallery">
                                    Gallery
                                </div>
                            </div>
                        :
                            <div></div>
                }
            </div>
        );
    }
}

export default App;