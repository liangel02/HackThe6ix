import React, { Component } from "react";
import { Dropdown } from 'react-bootstrap';

class MoodDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: ""
        }
    }

    //call this function when there is a change made in the dropdown selection 
    changeHandler = (e) => {
        this.props.parentCallback(e);
        this.setState({mood: e})
    }
    render() {
        let display = "";
        if (this.state.mood === "") {
            display = "Select your mood!";
        } else {
            display = this.state.mood;
        }
        return(
            <Dropdown onSelect={this.changeHandler}>
                <div>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {display}
                </Dropdown.Toggle>
                <Dropdown.Menu class = "mood-form input">
                    <Dropdown.Item eventKey="Positive">Positive</Dropdown.Item>
                    <Dropdown.Item eventKey="Neutral">Neutral</Dropdown.Item>
                    <Dropdown.Item eventKey="Negative">Negative</Dropdown.Item>
                </Dropdown.Menu>
                </div>
            </Dropdown>
        );
    }
}

export default MoodDropdown;
