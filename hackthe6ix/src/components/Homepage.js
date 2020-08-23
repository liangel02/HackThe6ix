import React, { Component } from "react";
import DayDescription from "./DayDescription";
import Feelings from "./Feelings";
import MoodDropdown from "./MoodDropdown";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: "sad",
            colour: this.props.colour,
            description: ""
        }
    }

    render(){
        return (
            <body class="body">
                <div class="wrapper">
                    <div class="heading">
                        What's your mood?
                    </div>
                    <DayDescription /><br></br>
                    <div>
                        No thanks, my mood is: 
                        <MoodDropdown /><br></br>
                    </div>
                    <Feelings />
                </div>
            </body>
        );
    }
}

export default HomePage;

