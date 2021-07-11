import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faCopy } from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import '../styles/preview.css'
import generartePassword from '../scripts/passGen'

class Preview extends Component{
    constructor(props){
        super(props);
        this.copyPassword = this.copyPassword.bind(this);
    }

    // Will load the initial password to the preview box 
    componentDidMount(){
        generartePassword();
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
                                this.copyPassword();
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
                                generartePassword();
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