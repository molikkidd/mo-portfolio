import React from "react";
import { Container, Jumbotron} from "react-bootstrap";
const About = (props) => {

    console.log('about js',props.addSkills)
       const {about, languages, frameWorks, 
              libraries, dataBaseTools, 
              other} = props.addSkills;
    return (
        <div>
            <Jumbotron className="aboutJumbo" fluid>
                <Container className="aboutCon" fluid> 
 
                <div>
                    <img id="aboutImg" src="https://static.parade.com/wp-content/uploads/2021/04/funny-photos2-1-e1617576745514.jpg"/>
                </div>  
                <div>
                    <div id="about">
                    <h1>About Me</h1>
                    <p>
                       {about}
                    </p>
                    </div>
                    <div className="languages">
                        <div className="skillsContainer">
                        <div class="card">
                            <div class="face face1">
                            <div class="content">
                                <p>{languages}</p>
                            </div>
                            </div>
                            <div class="face face2">
                                <h2>Languages</h2>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                            <div class="content">
                                <p>{frameWorks}</p>
                            </div>
                            </div>
                            <div class="face face2">
                                <h2>FrameWorks</h2>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                            <div class="content">
                                <p>{libraries}</p>
                            </div>
                            </div>
                            <div class="face face2">
                                <h2>Libraries</h2>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                            <div class="content">
                                <p>{dataBaseTools}</p>
                            </div>
                            </div>
                            <div class="face face2">
                                <h2>DataBase Tools</h2>
                            </div>
                        </div>
                        <div class="card">
                            <div class="face face1">
                            <div class="content">
                                <p>{other}</p>
                            </div>
                            </div>
                            <div class="face face2">
                                <h2>Other</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default About;