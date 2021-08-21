//jshint esversion:6

import React from 'react';
import loadable from '@loadable/component';
import Header from "./Header";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import SubMain from './SubMain';

const Footer = loadable(() => import('./Footer'));
const Home = loadable(() => import('./Home'));
const Customer = loadable(() => import('./Customer'));
const Contact = loadable(() => import('./Contact'));
const Project = loadable(() => import('./Project'));
const About = loadable(() => import('./About'));
const Nav = loadable(() => import('./Nav'));


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
              <SubMain />
            </Route>
          </Switch>
        </div>
    </Router>
    
  );
}


export default App;
