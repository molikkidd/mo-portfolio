import React from "react";
import { Jumbotron, Container, Image} from "react-bootstrap";
import portfolio1 from '../portfolio1.png'
import portfolio2 from '../portfolio2.png'
import sampleImg from '../sampleImg.png'


const Portfolio = () => {
    return (
        <div>
            <div id="port">
            <h3 >Recent Projects</h3>
            </div>
            <Jumbotron className="portfolioCon" fluid>
                <div className="wrapper">
                    <div className="portCard">
                        <div className="front">
                        <h1>Indy-Mo</h1>
                        <p>FullStack App<span>2021</span></p>
                        </div>
                        <div className="right">
                        <h2>FullStack App</h2>
                        <ul>
                            <li><b>Language: </b>Javascript </li>
                            <li> <b>FrameWork: </b>Node.js</li>
                            <li><strong>Library:</strong> Bootstrap	</li>
                            <li><b>DataBase: </b>PostgreSQL </li>
                            <li><b>Other:</b></li>
                        </ul>
                        </div>
                    </div>
                    <div className="img-wrapper">
                        <Image  className="portfolioImg" src={portfolio2} alt=''/>    
                    </div>
                </div>
                <div className="descriptionCon" >
                    <div className="descriptionCard">
                        <div className="descriptionFace1">
                            <h3>Description of Project</h3>
                            <p> 
                            <b>About: </b> 
                            Indy Mo is an application built to act as a template for a 
                            future project in the Housing Industry. Its an all encompassing 
                            app that allows the user to organize their day effeciently while
                            staying update with Industry news.
                            </p>  
                            <p>
                            <b>My Role: </b>  
                            Full Stack Web Developer (independent) 
                            </p>
                            <p>
                            <b>View Application: </b>  
                            <a href=""> Indy-Mo </a> 
                            </p>
                        </div>
                        <div className="descriptionFace2">
                            <Image src={portfolio1} alt="port image" fluid/>
                        </div>
                    </div>
                </div>
    
            </Jumbotron>
        </div>
    )
}

export default Portfolio;