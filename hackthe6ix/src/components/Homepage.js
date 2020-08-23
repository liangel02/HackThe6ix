import React, { Component } from "react";
import DayDescription from "./DayDescription";
import Feelings from "./Feelings";
import MoodDropdown from "./MoodDropdown";
import logo from "../media/Spotify-Logo.png";
import { Button } from 'react-bootstrap';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: "Neutral",
            colour: this.props.colour,
            description: "",
            excitement: 10,
            energy: 10
        }
    }


    // Send data from child components to homepage
    callbackMood = (childData) => {
        this.setState({mood: childData});
    }
    callbackExcitement = (childData) => {
        this.setState({excitement: childData})
        console.log(childData);
    }
    callbackEnergy = (childData) => {
        this.setState({energy: childData})
        console.log(childData);
    }

    submitHandler = (event) => {
        //prevents page from refreshing after submission 
        event.preventDefault();
        window.location.href = "http://localhost:8888";
    }
    render(){
        return (
            <body class="body">
                <div class="wrapper">
                    <div class="heading">
                        Moodify
                        <img src={logo} width="10%" height="10%"/>
                    </div>
                    <DayDescription />
                    <div class="d-flex justify-content-center my-4">
                        OR 
                    </div>
                    <div class="d-flex justify-content-center my-4">
                        <MoodDropdown parentCallback = {this.callbackMood}/>
                    </div>
                    <br></br>
                    <div class="d-flex justify-content-center my-4">
                        Tell us more!
                    </div>
                    <Feelings parentExcitementCB = {this.callbackExcitement} parentEnergyCB = {this.callbackEnergy}/>
                    <div class="d-flex justify-content-center my-4">
                        <Button variant="primary" size="lg" onClick={this.submitHandler}>Find Music</Button>
                    </div>
                </div>
            </body>
        );
    }
}

export default HomePage;

