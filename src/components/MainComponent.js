import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import SkillComponent from './SkillComponent';
import ProjectComponent from './ProjectComponent';
import CertificatesComponent from './CertificatesComponent';
import LoadingComponent from './LoadingComponent';
import {faInstagram,faLinkedin,faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class MainComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            isLoading : true
        }
    }
    componentDidMount(){
        this.setState({isLoading:false})
    }
    render(){
        let val = this.state.isLoading;
        if(val){
            return(
                <LoadingComponent/>
            )
        }
        else{
            return(
            
                <div className = "hello">
                    <HeaderComponent/>
                    <div className = "design-background"/>
                    <div id = "home">
                        <HomeComponent/>
                    </div>
                    <div id = "skills">
                        <SkillComponent/>
                    </div><div className = "design-background"/>
                    
                    <div id = "projects">
                        <ProjectComponent/>
                    </div><div className = "design-background"/>
                    <div id = "certificates">
                        <CertificatesComponent/>
                    </div>
                    <div className = "footer" style = {{marginTop:30}}>
                        <div className = "createdby">
                            <p>Created By</p>
                            <p className = "myname">Vora Mahammadasim</p>
                        </div>
                        <div>
                                    <span  className = "icon"><a href = {"https://www.instagram.com/asim.v_2131/"} target={"_blank"}><FontAwesomeIcon icon = {faInstagram} size = "2x"/></a></span>
                                
                                    <span  className = "icon"><a href = {"https://www.linkedin.com/in/asim-vora-a90865175/"}><FontAwesomeIcon icon = {faFacebook} size = "2x"/></a></span>
                               
                                    <span  className = "icon"><a href = {"https://twitter.com/Asim_2131"}><FontAwesomeIcon icon = {faTwitter} size = "2x"/></a></span>
                                
                                    <span  className = "icon"><a href = {"https://www.linkedin.com/in/asim-vora-a90865175/"}><FontAwesomeIcon icon = {faLinkedin} size = "2x"/></a></span>
                                
                            
                            <div className = "email-address">
                            <br></br>
                                asimvora2001@gmail.com
                            </div>
                        </div>
                   </div>
                </div>
            )
        }
        
    }
}