import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" sticky="bottom" >
        <Navbar.Brand href="#home">John Reiner</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="#home">Twitter</Nav.Link>
            <Nav.Link href="#features">Medium</Nav.Link>
            <Nav.Link href="#pricing">YouTube</Nav.Link>
            </Nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form> */}
        </Navbar>
    )
}
