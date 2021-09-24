import React from "react";
import { Jumbotron, Container, Image} from "react-bootstrap";
import portfolio1 from '../portfolio1.png'
import portfolio2 from '../portfolio2.png'
import sampleImg from '../sampleImg.png'


const Portfolio = () => {
    return (
        <div>
            <Jumbotron className="portfolioCon" fluid>
            <br/>
            <br/>
                
                <div className="wrapper">
                    <div className="portCard">
                        <div className="front">
                        <h1>Indy-Mo</h1>
                        <p>FullStack App<span>2021</span></p>
                        <p className="price">MZK</p>
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
                        <button>View Application</button>
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
                            Indy Mo is a template that resembles a
                                an all encompassing app that allows the user to
                                organize their day effeciently.
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