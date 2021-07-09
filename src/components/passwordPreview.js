import React, {Component} from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import '../styles/preview.css'

class Preview extends Component{
    render(){
        return(
            <div className = "Preview">
                <InputGroup>
                    <FormControl placeholder = "Password"></FormControl>
                    <Button variant="outline-secondary" id="button-addon2">
                        Button
                    </Button>
                </InputGroup>
                
            </div>
        );
    }
    
}
export default Preview;