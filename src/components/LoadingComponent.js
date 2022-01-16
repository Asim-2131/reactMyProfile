import React, {Component} from 'react';
export default class LoadingComponent extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className = "combined-div">
                    <div className = "loading-bar-1"/>
                    <div className = "loading-bar-2"/>
                    <p className = "please-wait">Loading ...</p>
                </div>
                
            </div>
        )
    }
}