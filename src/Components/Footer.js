import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" sticky="bottom" >
        <Navbar.Brand  style={{fontFamily: 'Bangers', color: "cornflowerBlue"}} href="#home">John Reiner</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="https://github.com/john-reiner" target="_blank">GitHub</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/john-reiner/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="https://medium.com/@johnreiner" target="_blank">Medium</Nav.Link>
            <Nav.Link href="https://www.youtube.com/channel/UClu_qUyeGWK_y0UCQsrK9Zw?view_as=subscriber" target="_blank">YouTube</Nav.Link>
            </Nav>
        </Navbar>
    )
}
