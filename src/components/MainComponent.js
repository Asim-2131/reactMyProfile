import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import SkillComponent from './SkillComponent';
import ProjectComponent from './ProjectComponent';
import CertificatesComponent from './CertificatesComponent';
import LoadingComponent from './LoadingComponent';

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
            
                <div>
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
                       <h2 style = {{display : "inline-block"}}>Created by 	&#8594;<div style = {{color : "white"}}>Vora Mahammadasim &#128516;</div></h2>
                   </div>
                </div>
            )
        }
        
    }
}