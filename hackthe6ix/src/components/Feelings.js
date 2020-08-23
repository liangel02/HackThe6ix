import React, { Component } from "react";
import Form from 'react-bootstrap/Form';


class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ""
        }
    }

    render(){
        return (
            //HTML form to submit day description via text box
            <div class="d-flex justify-content-center my-4">
                <div>
                    Tell us more!
                </div>
                
                <Form>
                <div>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Least excited</Form.Label>
                        <Form.Control type="range" min = "0" max = "10"/>
                        <Form.Label>Most excited</Form.Label>
                    </Form.Group>
                </div>
                <div>
                    <Form.Group controlId="formBasicRange">
                        <Form.Label>Least energy</Form.Label>
                        <Form.Control type="range" min = "0" max = "10"/>
                        <Form.Label>Most energy</Form.Label>
                    </Form.Group>
                </div>
                </Form>
                </div>
        );
    }
}

export default Feelings;