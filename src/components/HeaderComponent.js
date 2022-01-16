import React, {Component} from 'react';
import {Link,animateScroll as scroll} from 'react-scroll';
import "../styles.css";

export default class HeaderComponent extends Component{

    constructor(props){
        super(props);
    }
    handleScroll(id){
        console.log(this.ref);
        const item = React.findDOMNode(this.refs[id]);
        window.scrollTo(item.offsetTop);
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
                            <Link activeClass="active" to = "home" offset = {-80} duration = {500}>Home</Link>
                        </li>
                        <li className = "nav-items">
                            <Link to = "skills" offset = {-80} duration = {500}>Skills</Link>
                        </li>
                        <li className = "nav-items">
                            <Link to = "projects" offset = {-80} duration = {500}>Projects</Link>
                        </li>
                        <li className = "nav-items">
                            <Link to = "certificates" offset = {-80} duration = {500}>Certificates</Link>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}