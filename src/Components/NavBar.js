import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


export default function NavBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky={'top'}>
            <LinkContainer to='/'><Navbar.Brand href="#home" id={"brand"}>John Reiner</Navbar.Brand></LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                <NavDropdown title="About Me" id="collasible-nav-dropdown">
                    <LinkContainer to='/about'><NavDropdown.Item>About Me</NavDropdown.Item></LinkContainer>
                    <LinkContainer to='/resume'><NavDropdown.Item href="/about">Resume</NavDropdown.Item></LinkContainer>
                    <LinkContainer to='/portfolio'><NavDropdown.Item href="#action/3.3">Portfolio</NavDropdown.Item></LinkContainer>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://github.com/jareiner90" target="_blank">GitHub</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">Contact</Nav.Link>
                <Nav.Link eventKey={2} href="#memes" onClick={props.switchDarkmode}>
                    Dark: {props.darkmode? 'On' : 'Off'}
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
