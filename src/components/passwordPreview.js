import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faCopy } from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import '../styles/preview.css'

class Preview extends Component{
    // constructor(props){
    //     super(props);
    //     this.
    // }

    // Will load the initial password to the preview box 
    componentDidMount(){
        
    }

    generartePassword(password){
        // Alphabets
        const upperAlphabet  = "QWERTYUIOPASDFGHJKLZXCVBNM";
        const lowerAlphabet  = "qwertyuiopasdfghjklzxcvbnm";
        const symbolAlphabet = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
        const numbers        = "1234567890";
        
        // Get selected options 
        var passLength   = document.getElementById("sliderInfo").value;
        var hasUppercase = document.getElementById("uppercaseButton").value;
        var hasLowercase = document.getElementById("lowercaseButton").value;
        var hasNums      = document.getElementById("numberButton").value;
        var hasSymbols   = document.getElementById("symbolsButton").value;

        
        // 
    }

    render(){
        return(
            <div className = "Preview">
                <InputGroup>
                    <FormControl id= "noBorder" placeholder = "Password"></FormControl>
                    <Button variant="outline-secondary" class="btn btn-link" id="noBorder" data-toggle="tooltip" data-placement="right" title="Copy">
                        <FontAwesomeIcon icon={faCopy}/>    
                    </Button>
                    <Button variant="outline-secondary" class="btn btn-link" id="noBorder" data-toggle="tooltip" data-placement="right" title="Refresh">
                        <FontAwesomeIcon icon={faSync}/>
                    </Button>
                </InputGroup>
                
            </div>
        );
    }
    
}
export default Preview;