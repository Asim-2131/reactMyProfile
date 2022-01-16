import React, {Component} from 'react';
export default class CertificatesComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen : {},
            imgString : {}
        }
    }
    openPhoto(id){
        let imgSS = require("../images/"+id+".png");
        this.setState({
            ...this.state,isModalOpen : {display : "block"},imgString : imgSS
        })
    }
    closeModal(){
        this.setState({
            ...this.state,isModalOpen : {}
        })
    }
    render(){
        return(
            <div>                
                <div className = "main-heading-container forbr">
                    <div className = "heading-text">
                        Certificates
                    </div>
                    <div className = "certi-container forbr">
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
                <div id = "updateModal" className = "modal" style = {this.state.isModalOpen}>
                    <div className="modal-content">
                        <div className="modal-header-success">
                            <span className="close" onClick = {()=>this.closeModal()}>&times;</span>
                            <img src = {this.state.imgString} className = "img-tag"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}