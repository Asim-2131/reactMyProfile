import React, {Component} from 'react';
export default class HomeComponent extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className = "half-photo">
                    <div className = "mybackdiv"/>
                    <div className = "my-photo"/>
                </div>
                <div className = "nameandtext container"><div className = "mytext"><b>Hello !!</b></div>
                    <div className = "name">I'm Mahammadasim</div></div>
                
                <div className = "horizontalline"/>
            </div>
        )
    }
}