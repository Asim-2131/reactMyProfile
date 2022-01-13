import React, {Component} from 'react';
export default class Project extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <br></br><br></br>
                <div className = "main-heading-container">

                    <div className = "heading-text">
                        Projects
                    </div>
                    <br></br><br></br>
                    <div className = "main-row">
                        <div className = "row roweven">
                            <div className = "pimg project-img1">

                            </div>          
                            <div className = "project-content">
                                <h5 className = "project-heading">Payroll MS</h5>
                                <p className = "project-main-content">This is console based core java project which handle all employee record through file handling system</p>
                            </div>
                            
                            
                        </div>
                        <div className = "row rowodd">
                            <div className = "project-content">
                                <h5 className = "project-heading">Media Controller</h5>
                                <p className = "project-main-content">This is a python project which also include PyQt5 GUI interface. It containe features like downloading videos from YT, playing and making playlist of song and videos in custom GUI. </p>
                            </div>
                            <div className = "pimg project-img2">

                            </div>
                        </div>
                        <div className = "row roweven">
                            <div className = "pimg project-img3">
                            
                            </div>          
                            <div className = "project-content">
                                <h5 className = "project-heading">E-Learning</h5>
                                <p className = "project-main-content">It is Web Application for online learning which including online material and according Quiz for evaluation. Admin, Student and Teacher all of three are able to use this application according their needs. PHP, Bootstrap, Basic JavaScript, HTML, CSS is used in this project.</p>
                            </div>
                            
                        </div>
                        <div className = "row rowodd">
                            <div className = "project-content">
                                <h5 className = "project-heading">E-Library</h5>
                                <p className = "project-main-content">It is a Web Application to organizing books and student records. Admin and Librarian both are able to use this application to handling books and students also. It is Java based application. Servlets, JSP, HTML, CSS, Bootstrap and Core Java is used in this project.</p>
                            </div>
                            <div className = "pimg project-img4">

                            </div>
                        </div>
                        <div className = "row roweven">
                            <div className = "pimg project-img5">
                                
                            </div>          
                            <div className = "project-content">
                                <h5 className = "project-heading">Equity Portfolio</h5>
                                <p className = "project-main-content">It is a Full Stack (MERN) developed project for handling stock data. There
is a Web Scraping using Axios. There is a facility to watch stock's current
price and manage personal portfolio for user like investment, profit and
loss in particular stocks. In this Web Application I used MongoDB as a Back end Database (NoSql DB), ReactJS as front end development and
NodeJS and Express as server side coding.
</p>
                            </div>
                            
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                </div>
                
            </div>
        )
    }
}