import './App.css';
import './cards.css'
import './portfolio.css'

import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route, Link, Switch
} from 'react-router-dom';
import Home from "./pages/Home"
import { Navbar } from 'react-bootstrap';

function App() {

  const portfolioUrls = [
    { 
      name: 'Indy-Mo',
      image: 'public/indy-mo-page.png',
      url:'https://indymo-app.herokuapp.com/' 
    },{
      name:'Brick-Buster',
      image: 'public/indy-mo-page.png',
      url:'https://indymo-app.herokuapp.com/' 
    },{ 
      name:'Go-Kart-Tracker',
      image: 'public/indy-mo-page.png',
      url:'https://indymo-app.herokuapp.com/' 
    }
  ]

  const skills = {

    about : ["I'm a Los Angeles-based Web Developer and Designer with a non-traditional ", 
          "coding background. I studied Biology and Chemistry in university, but my", 
          "job experiences include IT, Math and Science teacher and full-stack development", 
          ", but primarily on personal projects. I have taken 3 fullstack courses and was a", 
          "recipient of a Google Scholarship where we focused on Mobile Web Development",
          "and Responsive apps and also recieved a Mobile Web Specialist certificate through the program.", 
          " I love building web experiences that are effortless for users and enjoy solving", 
          "design and backend problems through code. When I'm not coding, you can probably ", 
          "find me traveling , exercising hanging out with friends."],
    languages : [" Javascript | ", " HTML5 | " ," CSS3 | ", " RUBY "],
    frameWorks : [" Node.js | ", " Rails | ", " Express.js | " , " Sails.js | ", "AngularJS | ",  "React.js"],
    libraries : [" D3.js | ", "jQuery | " , " Bootstrap | " , " Foundation | " , "Angular Material"],
    dataBaseTools : [" PostgreSQL", " MongoDB " , " Sequelize " , "Waterline", "Mongoose"],
    other : ["AJAX | ", "Heroku | ", "Git/Github | " ,"JSON | ", "REST APIs | ", "Adobe Creative Suite | ", "Bcrypt | " ,"Gulp "]
  }
    
  

  return (
    <Router>
      <Navbar>
        <h1>MK</h1> 
      </Navbar>
      <div className="bodyDiv"> 
      <Switch>
        <Route exact path="/" render={() => 
        <Home skills={skills}/>}
        />
      </Switch>
      </div>
    </Router> 
  );
}

export default App;
