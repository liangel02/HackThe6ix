import React, { Component } from "react";

class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return (
            //HTML form to submit day description via text box
            <div class="d-flex justify-content-center my-4">
                <pre class="tab">
                <div class="d-flex justify-content-center my-4">
                    <span class="font-weight-bold">Least Excited (0)</span>
                    <form class="range-field w-70">
                        &nbsp;
                        <input class="border-0" type="range" min="0" max="10" />
                    </form>
                    <span class="font-weight-bold">&nbsp;Most Excited(10)</span>
                </div>
                
                <div class="d-flex justify-content-center my-4">
                    <span class="font-weight-bold">Least Energy(0)</span>
                    <form class="range-field w-40">
                        &nbsp;
                        <input class="border-0" type="range" min="0" max="10" />
                    </form>
                    <span class="font-weight-bold blue-text">&nbsp;Most Energy(10)</span>
                </div>
                </pre>
            </div>
        );
    }
}

export default Feelings;