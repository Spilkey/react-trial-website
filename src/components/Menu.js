import React, { Component } from 'react';
import {
HashRouter,
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
            <HashRouter  basename='/'>
                <div>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="home">Samuel Pilkey</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        <Nav.Link><Link to="/projects">Projects</Link></Nav.Link>
                        <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
                </div>
            </HashRouter >
        );
    }
}