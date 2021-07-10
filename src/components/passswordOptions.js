import React, {Component, useState} from 'react';
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
                <h1 id = "optionH1">Password Options</h1>
                {/* Inputs for slider */}
                <div class="sliderContainer">
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
                {/* Buttons for other options */}


            </div>
            
        );
    }
    
}
export default Options;