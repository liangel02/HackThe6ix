import React, { Component } from "react";
import DayDescription from "./DayDescription";

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
                    <DayDescription />
                    <div>
                        No thanks, my mood is: 
                    </div>
                </div>
            </body>
        );
    }
}

export default HomePage;

