import React from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'


export default function Header(props) {
    return (
        
        <div id="home" div style={{width: "100vw", height: "100vh", backgroundImage: "url('header_background.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}} >
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand style={{fontFamily: 'Bangers', color: "cornflowerBlue"}} href="#home">My Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#portfolio">Projects</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
                <Nav.Link href="#about">About Me</Nav.Link>
                </Nav>
                    <Button style={{borderRadius: '0'}} variant="outline-primary" onClick={() => props.setShowContact(true)}>Contact</Button>
                </Navbar.Collapse>
            </Navbar>

            

            <h1 id={"brand"}>John Reiner</h1>
            <div id={"sub-brand"}>
                <h4>Full Stack Web Developer</h4>
                <p>Checkout some of my projects below...</p>                
            </div>



        </div>
    )
}
