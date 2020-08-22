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
            <div>
                <header>
                    Talk about your day, and we'll find music to suit your mood!
                    <form>
                        <label for="fname">Talk about your day: </label>
                        <input type="text" id="fname" name="fname"></input>
                        <input type="submit" name = "submit"></input>
                    </form>
                </header>
                <header>
                    No thanks, I know I'm feeling:
                </header>
            </div>
            
        );
    }
}

export default HomePage;
