import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faCopy } from '@fortawesome/free-solid-svg-icons'
import React, {Component} from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import '../styles/preview.css'

class Preview extends Component{
    render(){
        return(
            <div className = "Preview">
                <InputGroup>
                    <FormControl id= "noBorder" placeholder = "Password"></FormControl>
                    <Button variant="outline-secondary" id="button-addon2 noBorder" data-toggle="tooltip" data-placement="right" title="Copy">
                        <FontAwesomeIcon icon={faCopy}/>    
                    </Button>
                    <Button variant="outline-secondary" id="button-addon2 noBorder" data-toggle="tooltip" data-placement="right" title="Refresh">
                        <FontAwesomeIcon icon={faSync}/>
                    </Button>
                </InputGroup>
                
            </div>
        );
    }
    
}
export default Preview;