import React, {Component} from 'react';
export default class CertificatesComponent extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }
    openPhoto(id){
        console.log(id);
    }
    render(){
        return(
            <div>
                <br></br><br></br><br></br>
                <div className = "main-heading-container">
                    <div className = "heading-text">
                        Certificates
                    </div>
                    <br></br><br></br><br></br>
                    <div className = "certi-container">
                        <div className = "each-certi">
                            <div className = "certi-site">
                                HackerRank
                            </div>
                            <div className = "certi-name">
                                Problem Solving Basics
                            </div>
                            <div className = "certi-view">
                                <div className = "goto-button-image" onClick = {()=>{this.openPhoto(1)}}></div>
                            </div>
                        </div>
                        <div className = "each-certi1">
                            <div className = "certi-site">
                                HackerRank
                            </div>
                            <div className = "certi-name">
                                Problem Solving Intermediate
                            </div>
                            <div className = "certi-view">
                                <div className = "goto-button-image" onClick = {()=>{this.openPhoto(2)}}></div>
                            </div>
                        </div>
                        <div className = "each-certi">
                            <div className = "certi-site">
                                HackerRank
                            </div>
                            <div className = "certi-name">
                                Problem Solving Advance
                            </div>
                            <div className = "certi-view">
                                <div className = "goto-button-image" onClick = {()=>{this.openPhoto(3)}}></div>
                            </div>
                        </div>
                        <div className = "each-certi1">
                            <div className = "certi-site">
                                Coursera
                            </div>
                            <div className = "certi-name">
                                Bootstrap 4
                            </div>
                            <div className = "certi-view">
                                <div className = "goto-button-image" onClick = {()=>{this.openPhoto(4)}}></div>
                            </div>
                        </div>
                        <div className = "each-certi">
                            <div className = "certi-site">
                                Coursera
                            </div>
                            <div className = "certi-name">
                                ReactJS
                            </div>
                            <div className = "certi-view">
                                <div className = "goto-button-image" onClick = {()=>{this.openPhoto(5)}}></div>
                            </div>
                        </div>
                        <div className = "each-certi1">
                            <div className = "certi-site">
                                Coursera
                            </div>
                            <div className = "certi-name">
                                MongoDB, Express, NodeJS
                            </div>
                            <div className = "certi-view">
                                <div className = "goto-button-image" onClick = {()=>{this.openPhoto(6)}}></div>
                            </div>
                        </div>
                        <div className = "each-certi">
                            <div className = "certi-site">
                                Coursera
                            </div>
                            <div className = "certi-name">
                                MATLAB
                            </div>
                            <div className = "certi-view">
                                <div className = "goto-button-image" onClick = {()=>{this.openPhoto(7)}}></div>
                            </div>
                        </div>
                        <div className = "each-certi1">
                            <div className = "certi-site">
                                Coursera
                            </div>
                            <div className = "certi-name">
                                Algorithmic Toolbox
                            </div>
                            <div className = "certi-view">
                                <div className = "goto-button-image" onClick = {()=>{this.openPhoto(8)}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div id = "updateModal" className = "modal" style = {this.state.updateModal}></div> */}
            </div>
        )
    }
}