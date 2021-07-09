import React, {Component} from 'react';
import '../styles/options.css'

// Slider logic
const slider = document.getElementById("mySlider");
const info = document.getElementById("sliderInfo");
info.innerHTML = slider.value;
slider.oninput = function() {
    info.innerHTML = this.value;
}

class Options extends Component{
    render(){
        return(
            <div className = "Options">
                <h1 id = "optionH1">Password Options</h1>
                
                <div class="sliderContainer">
                    <input id="sliderInfo" type="text" readonly></input>
                    <input type="range" min="6" max="256" class="slider" id="mySlider"></input>
                    
                </div>
                
            </div>
            
        );
    }
    
}
export default Options;