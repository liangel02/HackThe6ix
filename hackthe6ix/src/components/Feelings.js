import React, { Component } from "react";

class Feelings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            excitement: 10,
            energy: 10
        }
    }

    //call these functions when there is a change made on the slider
    changeExcitement = (event) => {
        this.props.parentExcitementCB(event.target.value);
        this.setState({excitement: event.target.value});
    }
    changeEnergy = (event) => {
        this.props.parentEnergyCB(event.target.value);
        this.setState({energy: event.target.value});
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
                        <input class="border-0" type="range" min="0" max="10" onChange={this.changeExcitement}/>
                    </form>
                    <span class="font-weight-bold">&nbsp;Most Excited(10)</span>
                </div>
                
                <div class="d-flex justify-content-center my-4">
                    <span class="font-weight-bold">Least Energetic(0)</span>
                    <form class="range-field w-40">
                        &nbsp;
                        <input class="border-0" type="range" min="0" max="10" onChange={this.changeEnergy} />
                    </form>
                    <span class="font-weight-bold blue-text">&nbsp;Most Energetic(10)</span>
                </div>
                </pre>
            </div>
        );
    }
}

export default Feelings;