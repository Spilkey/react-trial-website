import React, { Component } from 'react';
import {
BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

import Home from '../views/home/Home'
import About from '../views/about/About'
import Projects from '../views/project/Projects'
import Contact from '../views/contact/Contact'

import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
export default class Menu extends Component {
    render() {
        return (
            <Router>
                <div>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="home">Samuel Pilkey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="projects">Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/home">
                    <Home />
                    </Route>
                    <Route path="/about">
                    <About />
                    </Route>
                    <Route path="/projects">
                    <Projects />
                    </Route>
                    <Route path="/contact">
                    <Contact />
                    </Route>
                </Switch>
                </div>
            </Router>
        );
    }
}