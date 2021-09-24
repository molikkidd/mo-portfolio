import React from "react";
import { Jumbotron, Container} from "react-bootstrap";



const Portfolio = () => {
    return (
        <div>
            <Jumbotron className="portfolioCon" fluid>
            <br/>
            <br/>
                
                <div class="wrapper">
                    <div class="portCard">
                        <div class="front">
                        <h1>Indy-Mo</h1>
                        <p>FullStack App<span>2021</span></p>
                        <p class="price">MZK</p>
                        </div>
                        <div class="right">
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
                        <img  className="portfolioImg" src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png' alt=''/>    
                    </div>
                </div>

                <div className="descript">
                    <h2>Description of Project</h2>
                    <p>
                    Indy Mo is a template that resembles a
                        an all encompassing app that allows the user to
                        organize their day effeciently.
                    </p>
                </div>
               
            </Jumbotron>
        </div>
    )
}

export default Portfolio;