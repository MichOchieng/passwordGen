import React, {Component, useState} from 'react';
import { Row,Col, Form } from 'react-bootstrap';
import '../styles/options.css';


class Options extends Component{
    constructor(props){
        super(props);
        this.state = { // Used for initial slider value 
            count: 6
        };
    }

    // Allows slider value to be updated visually by simulating a click on the input box
    updateSlider(){ 
        document.getElementById("sliderInfo").click();
    }
    // Updates the value of the input box
    view(){
        document.getElementById("sliderInfo").value = document.getElementById("mySlider").value;
    }
    
    render(){
        return(
            <div className = "Options">
                <Row>
                <h1 id = "leftHeaders">Password Options</h1>
                    <Col>
                        {/* Inputs for slider */}
                        <div class="sliderContainer">
                            <h3 id = "leftHeaders">Password Length</h3>
                            <input 
                                id="sliderInfo" 
                                type="text"
                                value={this.state.count}
                                onClick={this.view}
                                readOnly></input>
                            <input 
                                type="range" 
                                min={this.state.count} 
                                max="256" 
                                defaultValue="6"
                                class="slider" 
                                id="mySlider"
                                onInput={this.updateSlider}
                                ></input>
                            
                        </div>
                    </Col>
                    <Col>
                        {/* Buttons for other options */}
                        <div class="formButtons">
                            <Form.Check
                                type="checkbox"
                                id={'defaul-${type}'}
                                label="Uppercase"
                            ></Form.Check>
                            <Form.Check
                                type="checkbox"
                                id={'defaul-${type}'}
                                label="Lowercase"
                            ></Form.Check>
                            <Form.Check
                                type="checkbox"
                                id={'defaul-${type}'}
                                label="Numbers"
                            ></Form.Check>
                            <Form.Check
                                type="checkbox"
                                id={'defaul-${type}'}
                                label="Symbols"
                            ></Form.Check>
                        </div>
                    </Col>
                </Row>
                

            </div>
            
        );
    }
    
}
export default Options;