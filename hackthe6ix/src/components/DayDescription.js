import React, { Component } from "react";

class DayDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }

    changeHandler = (event) => {
        this.setState({description: event.target.value});
    }

    render(){
        return (
            <form class="mood-form" method="post">
                <input type="text" name="Tell us about your day" placeholder="How was your day?" required autocomplete="off"></input>
                <input type="submit" name="submit" value="Find me music" class="submit"></input>
            </form>
        );
    }
}

export default DayDescription;