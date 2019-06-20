import React, {Component} from 'react';
import {FormGroup, FormControl, InputGroup, Button} from 'react-bootstrap';

import './App.css';


class App extends Component {
    render(){
        return (
            <div className="app">
                <div className="app-title">Music Master</div>
                <FormGroup>
                    <InputGroup>
                        <FormControl 
                            type="text"
                            placeholder="search for an artist"
                        />
                        <InputGroup.Append>
                            <Button variant="success">Search</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </FormGroup>
                <div className="profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="gallery">
                    Gallery
                </div>
            </div>
        );
    }
}

export default App;