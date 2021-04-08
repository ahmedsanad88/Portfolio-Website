//jshint esversion:6

import React from 'react';
import loadable from '@loadable/component';
import Header from "./Header";
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import './App.css';
import { Button} from '@material-ui/core';

const Footer = loadable(() => import ('./Footer'));
const Home = loadable(() => import ('./Home'));
const Customer = loadable(() => import ('./Customer'));
const Contact = loadable(() => import ('./Contact'));
const Project = loadable(() => import ('./Project'));
const About = loadable(() => import ('./About'));
const Nav = loadable(() => import ('./Nav'));


function App() {

  return (
    <Router>
        <div>
          <Switch>
            <Route exact path="/project">
                <Header />
                  <Project />
                <Footer />
            </Route>

            <Route exact path="/contact">
                <Header />
                  <Contact />
                <Footer />
            </Route>

            <Route exact path="/about">
                <Header />
                  <About />
                <Footer />
            </Route>
            
            <Route exact path="/main">
              <Header />
                <Nav />
                <Home />
                <About />
                <Project />
                <Customer />
                <Contact />
              <Footer />
            </Route>

            <Route exact path="/" >
              <Header />
                <Home />
                <div className='btn1'>
                  <Button component={Link} to='/main'
                    variant="outlined"
                    color="primary"
                    style={{color: 'white', boxShadow: '2px 2px 2px rgba(98, 0, 255, 0.4)'}}
                  >
                  Click to know More!</Button>
                </div>
              {/* <Footer /> */}
            </Route>
          </Switch>
        </div>
    </Router>
    
  );
}


export default App;
