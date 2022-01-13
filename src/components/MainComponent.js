import React, {Component} from 'react';
import HeaderComponent from './HeaderComponent';
import HomeComponent from './HomeComponent';
import SkillComponent from './SkillComponent';
import ProjectComponent from './ProjectComponent';
export default class MainComponent extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                 <HeaderComponent/>
                <div id = "home">
                    <HomeComponent/>
                </div>
                <div id = "skills">
                    <SkillComponent/>
                </div>
                <div id = "projects">
                    <ProjectComponent/>
                </div>
                <div className = "footer" style = {{marginTop:30}}>
                   <h2 style = {{display : "inline-block"}}>Created by 	&#8594;<div style = {{color : "white"}}>Vora Mahammadasim &#128516;</div></h2>
               </div>
            </div>
        )
    }
}