import React, {Component} from 'react';
import '../styles/header.css'

class Header extends Component{
    render(){
        return(
            <div className = "Header">
                <h1>Password Generator</h1>
                <i>&#128273;</i>
            </div>
        );
    }
    
}
export default Header;