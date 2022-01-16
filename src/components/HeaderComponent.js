import React, {Component} from 'react';
import "../styles.css";

export default class HeaderComponent extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "header">
                <div className = "navbar container">
                    <div className = "logo">
                        <div className = "logo-img"/>
                    </div>
                    <div className = "options">
                        <li className = "nav-items">
                            Home
                        </li>
                        
                        <li className = "nav-items">
                            About
                        </li>
                        <li className = "nav-items">
                            Skills
                        </li>
                        <li className = "nav-items">
                            Projects
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}