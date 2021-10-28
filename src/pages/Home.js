import React from "react";
import { Jumbotron, Container, Button} from "react-bootstrap";
import About from "../components/About";
import Portfolio from "../components/Portfolio";

const Home = (props) => {

    const {skills} = props;
        console.log('one skill', skills);

   
    return (
        <div className="homeDiv">
            <Jumbotron className="homeJumbo"fluid> 
                <Container>  
                <div className="intro">
                    <h1 className="typeWriter">Molik Kidd Portfolio</h1>
                    <p>
                    Hi My Name is....Who?...My Name is.. What?
                    My Name is ...Molik    
                    </p>
                </div> 
                <div className="homeBtnsDiv">
                    <Button variant="dark">
                        Portfolio
                    </Button>
                    <Button variant="dark">
                        About
                    </Button>
                    <Button variant="dark">
                        Contact
                    </Button>
                </div>
                </Container>
                
            </Jumbotron>
            <About addSkills={skills}/>

            <Portfolio/>
                <br/>
        </div>
    )
}

export default Home;