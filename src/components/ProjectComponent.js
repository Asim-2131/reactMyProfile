import React, {Component} from 'react';

export default class Project extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className = "main-heading-container forbr">
                    <div className = "heading-text">Projects</div>
                    <div className = "main-row forbr">
                        <div className = "row roweven">
                            <div className = "pimg project-img1"/>          
                            <div className = "project-content">
                                <h5 className = "project-heading">Payroll MS</h5>
                                <p className = "project-main-content">This is console based core java project which handle all employee record through file handling system</p>
                                <a href = {"https://github.com/Asim-2131/Payroll-MS"} target = {"_blank"}>
                                    <div className = "visit-source-code"/>
                                </a>
                            </div>
                        </div>
                        <div className = "row rowodd">
                            <div className = "project-content">
                                <h5 className = "project-heading">Media Controller</h5>
                                <p className = "project-main-content">This is a python project which also include PyQt5 GUI interface. It containe features like downloading videos from YT, playing and making playlist of song and videos in custom GUI. </p>
                                <a href = {"https://github.com/Asim-2131/MediaController"} target = {"_blank"}>
                                    <div className = "visit-source-code"/>
                                </a>
                            </div>
                            <div className = "pimg project-img2"/>
                        </div>
                        <div className = "row roweven">
                            <div className = "pimg project-img3"/>          
                            <div className = "project-content">
                                <h5 className = "project-heading">E-Learning</h5>
                                <p className = "project-main-content">It is Web Application for online learning which including online material and according Quiz for evaluation. Admin, Student and Teacher all of three are able to use this application according their needs. PHP, Bootstrap, Basic JavaScript, HTML, CSS is used in this project.</p>
                                <a href = {"https://github.com/Asim-2131/E-Learning"} target = {"_blank"}>
                                    <div className = "visit-source-code"/>
                                </a>
                            </div>
                           
                        </div>
                        <div className = "row rowodd">
                            <div className = "project-content">
                                <h5 className = "project-heading">E-Library</h5>
                                <p className = "project-main-content">It is a Web Application to organizing books and student records. Admin and Librarian both are able to use this application to handling books and students data. Servlets, JSP, HTML, CSS, Bootstrap and Core Java is used in this project.</p>
                                <a href = {"https://github.com/Asim-2131/E-Library"} target = {"_blank"}>
                                    <div className = "visit-source-code"/>
                                </a>
                            </div>
                            <div className = "pimg project-img4"/>
                            
                        </div>
                        <div className = "row roweven">
                            <div className = "pimg project-img5">
                                
                            </div>          
                            <div className = "project-content">
                                <h5 className = "project-heading">Equity Portfolio</h5>
                                <p className = "project-main-content">It is a Full Stack (MERN) developed project for handling stock data. There is a facility to watch stock's current price and manage personal portfolio for user like investment, profit and
                                loss in particular stocks.
                                </p>
                                <a href = {"https://github.com/Asim-2131/EquityPortfolio"} target = {"_blank"}>
                                    <div className = "visit-source-code"/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                </div>
                <div className = "horizontalline"/>
            </div>
        )
    }
}