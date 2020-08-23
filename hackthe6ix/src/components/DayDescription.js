import React, { Component } from "react";
//import { get_sentiments } from '../sentiment.js'

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
        //console.log(get_sentiments(documents))
        alert(this.state.description);
        window.location.href = "http://localhost:8888";
    }
    
    render(){
        return (
            //HTML form to submit day description via text box
            <form class="mood-form" method="post" onSubmit ={this.submitHandler}>
                <input type="text" name="description" placeholder="How was your day?" required autocomplete="off" onChange={this.changeHandler}>
                </input>
                <div></div>
            </form>
        );
    }
}

export default DayDescription;