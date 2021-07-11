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
        this.copyPassword      = this.copyPassword.bind(this);
    }

    // Will load the initial password to the preview box 
    componentDidMount(){
        this.generartePassword();
    }
    
    generartePassword(){
        // Clear password
        this.state.password = "";
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
                index++;
            }  
            if (hasLowercase && index<=passLength) {
                // Add lowercase char to password
                this.state.password += lowerAlphabet[Math.floor(Math.random()*lowerAlphabet.length)];
                index++;
            }
            if (hasNums && index<=passLength) {
                // Add number to password
                this.state.password += numbers[Math.floor(Math.random()*numbers.length)];
                index++;
            }
            if (hasSymbols && index<=passLength) {
                // Add symbol char to password
                this.state.password += symbolAlphabet[Math.floor(Math.random()*symbolAlphabet.length)];
                index++;
            }
            
        }
        // Return password 
        document.getElementById("passwordPreview" ).value = this.state.password
    }

    copyPassword(){
        var pass = document.getElementById("passwordPreview");
        pass.focus();
        pass.select();
        pass.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }

    render(){
        return(
            <div className = "Preview">
                <InputGroup>
                    <FormControl 
                        id= "passwordPreview" 
                    >
                    </FormControl>
                    <Button 
                        variant="outline-secondary" 
                        class="btn btn-link" 
                        id="noBorder" 
                        data-toggle="tooltip" 
                        data-placement="right" 
                        title="Copy"
                        onClick={
                            () => {
                                this.copyPassword()
                            }
                        }
                        >
                            <FontAwesomeIcon icon={faCopy}/>    
                    </Button>
                    <Button 
                        variant="outline-secondary" 
                        class="btn btn-link" id="noBorder" 
                        data-toggle="tooltip" 
                        data-placement="right" 
                        title="Refresh"
                        onClick={
                            () => {
                                this.generartePassword()
                            }
                        }
                        >
                            <FontAwesomeIcon icon={faSync}/>
                    </Button>
                </InputGroup>
                
            </div>
        );
    }
    
}
export default Preview;