import React from 'react'
import {Nav, Navbar, NavDropdown} from 'react-bootstrap'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky={'top'}>
        <Navbar.Brand href="#home" className={"brand"}>John Reiner</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <NavDropdown title="About Me" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About Me</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Resume</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Portfolio</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">GitHub</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">Contact</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dark: On
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
