import React, {Component} from 'react';
import '../styles/options.css'

class Options extends Component{
    render(){
        return(
            <div className = "Options">
                <h1 id = "optionH1">Password Options</h1>
                
                <div class="sliderContainer">
                    <input id="sliderInfo"></input>
                    <input type="range" min="6" max="256" value="6" class="slider" id="mySlider"></input>
                    
                </div>

            </div>
            
        );
    }
    
}
export default Options;