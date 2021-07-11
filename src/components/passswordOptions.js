import React, {Component} from 'react';
import { Row,Col, Form } from 'react-bootstrap';
import '../styles/options.css';
import generartePassword from '../scripts/passGen'


class Options extends Component{
    constructor(props){
        super(props);
        this.state = { // Used for initial slider value 
            count: 6
        };
    }

    // Allows slider value to be updated visually by simulating a click on the input box
    updateSlider(){ 
        generartePassword();
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
                                onInput={
                                    this.updateSlider
                                }
                                ></input>
                            
                        </div>
                    </Col>
                    <Col>
                        {/* Buttons for other options */}
                        <div class="formButtons">
                            <Form.Check
                                type="checkbox"
                                id="uppercaseButton"
                                label="Uppercase"
                                defaultChecked="true"
                            ></Form.Check>
                            <Form.Check
                                type="checkbox"
                                id="lowercaseButton"
                                label="Lowercase"
                                defaultChecked="true"
                            ></Form.Check>
                            <Form.Check
                                type="checkbox"
                                id="numberButton"
                                label="Numbers"
                                defaultChecked="true"
                            ></Form.Check>
                            <Form.Check
                                type="checkbox"
                                id="symbolsButton"
                                label="Symbols"
                                defaultChecked="true"
                            ></Form.Check>
                        </div>
                    </Col>
                </Row>
                

            </div>
            
        );
    }
    
}
export default Options;