import React, { Component } from "react";
import { get_sentiments } from '../sentiment.js'

class DayDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }

    //call this function when there is a change made in the form 
    changeHandler = (event) => {
        this.setState({description: event.target.value});
    }

    //call this fucntion when form is submitted
    submitHandler = (event) => {
        //prevents page from refreshing after submission 
        event.preventDefault();
        let documents = {
            'documents': [
                { 'id': '1', 'language': 'en', 'text': this.state.description},
            ]
        };
        console.log(get_sentiments(documents))
    }
    
    render(){
        return (
            //HTML form to submit day description via text box
            <form class="mood-form" method="post" onSubmit ={this.submitHandler}>
                <input type="text" name="Tell us about your day" placeholder="How was your day?" required autocomplete="off" onChange={this.changeHandler}>
                </input>
                <input type="submit" name="submit" value="Find me music" class="submit"></input>
            </form>
        );
    }
}

export default DayDescription;