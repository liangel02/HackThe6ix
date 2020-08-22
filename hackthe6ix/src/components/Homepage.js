import React, { Component } from "react";

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: "sad",
            colour: this.props.colour
        }
    }
    render(){
        return (
            <body class="body">
                <div class="wrapper">
                    <div class="heading">
                        What's your mood?
                    </div>
                    <form class="mood-form" method="post">
                        <input type="text" name="Tell us about your day" placeholder="How was your day?" required autocomplete="off"></input>
                        <input type="submit" name="submit" value="SAVE" class="submit"></input>
                    </form>
                    <div>
                        No thanks, my mood is: 
                    </div>
                </div>
            </body>
        );
    }
}

export default HomePage;

