import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

class MoodDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }
    render() {
        return(
            <Dropdown>
                <div>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select your mood!
                </Dropdown.Toggle>
                <Dropdown.Menu class = "mood-form input">
                    <Dropdown.Item href="#/action-1">Positive</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Neutral</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Negative</Dropdown.Item>
                </Dropdown.Menu>
                </div>
            </Dropdown>
        );
    }
}

export default MoodDropdown;
