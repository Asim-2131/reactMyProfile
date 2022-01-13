import React, {Component} from 'react';
export default class SkillComponent extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <div className = "main-heading-container">
                <div className = "heading-text">
                    Skills
                </div>
                <br></br><br></br><br></br>
                <div className = "cardContainer flexContainer">
                    <div className = "card">
                        <div className = "card-image imgurl1"/>
                        <div className = "card-name">
                            C++
                        </div>
                    </div>
                    <div className = "card">
                        <div className = "card-image imgurl2"/>
                        <div className = "card-name">
                            Python
                        </div>
                    </div>
                    <div className = "card">
                        <div className = "card-image imgurl3"/>
                        <div className = "card-name">
                            Java
                        </div>
                    </div>
                    <div className = "card">
                        <div className = "card-image imgurl4"/>
                        <div className = "card-name">
                            Sql
                        </div>
                    </div>
                    <div className = "card">
                        <div className = "card-image imgurl5"/>
                        <div className = "card-name">
                            ReactJS
                        </div>
                    </div>
                    <div className = "card">
                        <div className = "card-image imgurl6"/>
                        <div className = "card-name">
                            PHP
                        </div>
                    </div>
                    <div className = "card">
                        <div className = "card-image imgurl8"/>
                        <div className = "card-name">
                            MongoDB
                        </div>
                    </div>
                    <div className = "card">
                        <div className = "card-image imgurl9"/>
                        <div className = "card-name">
                            Express
                        </div>
                    </div>
                    <div className = "card">
                        <div className = "card-image imgurl10"/>
                        <div className = "card-name">
                            Express
                        </div>
                    </div>
                    
                </div>
                <br/><br/>
                
            </div><div className = "horizontalline"/>
            </div>
        )
    }
}