import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" sticky="bottom" >
        <Navbar.Brand  style={{fontFamily: 'Bangers', color: "cornflowerBlue"}} href="#home">John Reiner</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="#home">Twitter</Nav.Link>
            <Nav.Link href="#features">Medium</Nav.Link>
            <Nav.Link href="#pricing">YouTube</Nav.Link>
            </Nav>
        </Navbar>
    )
}
