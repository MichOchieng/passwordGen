import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faCopy } from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import '../styles/preview.css'

class Preview extends Component{
    constructor(props){
        super(props);
        this.state = {
            password: ""
        }; 
        this.generartePassword = this.generartePassword.bind(this);
    }

    // Will load the initial password to the preview box 
    componentDidMount(){
        this.generartePassword();
    }
    
    generartePassword(){
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

        // Check password critria
        for (let index = 0; index <= passLength; index++) {
            if (hasUppercase && index<=passLength) {
                // Add uppercase char to password
                this.state.password += upperAlphabet[Math.floor(Math.random()*upperAlphabet.length)];
                console.log("Current pass: " + this.state.password);
                index++;
            }  
            if (hasLowercase && index<=passLength) {
                // Add lowercase char to password
                this.state.password += lowerAlphabet[Math.floor(Math.random()*lowerAlphabet.length)];
                console.log("Current pass: " + this.state.password);
                index++;
            }
            if (hasNums && index<=passLength) {
                // Add number to password
                this.state.password += numbers[Math.floor(Math.random()*numbers.length)];
                console.log("Current pass: " + this.state.password);
                index++;
            }
            if (hasSymbols && index<=passLength) {
                // Add symbol char to password
                this.state.password += symbolAlphabet[Math.floor(Math.random()*symbolAlphabet.length)];
                console.log("Current pass: " + this.state.password);
                index++;
            }
            
        }
        console.log("Pass: " + this.state.password);

        // Scramble and return password 

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