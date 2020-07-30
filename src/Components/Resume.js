import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function Resume() {
    return (
        <Container style={{paddingTop: "2em", paddingBottom: "2em"}}>
            <Row>
                <Col xs={6} md={4}>
                    <Image src="resume.png" alt="John Reiner" style={{height: "200px"}} rounded />
                    <h2 style={{paddingTop: '2em'}} >John Reiner</h2>
                    <h4 style={{color: 'grey'}} >Full Stack Web Engineer</h4>
                    <hr style={{borderTop: "3px solid #333"}}/>
                    <p>Front End Engineer with working knowledge of Full Stack Web Development. Powerful front end  programming skills and proficiency in React, Javascript, HTML, and CSS. A strong understanding of ES6 and modern CSS features including Flexbox and Bootstrap. 5 years experience working in the banking and financial industry with a focus on Sales and Customer Service. Strong track record of leading teams and representing departments on cross functional teams. Excellent at resolving complex problems and strong communication skills. </p>
                    <hr style={{borderTop: "3px solid #333"}}/>
                    <h5>Location</h5>
                    <p>Keyport, New Jersey 07735</p>
                    <h5>Email</h5>
                    <p><a href="mailto:john.a.reiner@gmail.com" >John.a.Reiner@gmail.com</a></p>
                    <h5>GitHub</h5>
                    <p><a href="https://github.com/jareiner90" target="_blank"> john-reiner </a></p>
                    <hr style={{borderTop: "3px solid #333"}}/>
                </Col>
                <Col xs={12} md={8} style={{backgroundColor: "#333", color: "white"}}>
                    <h2>Education</h2>
                </Col>
            </Row>
        </Container>
    )
}
//test
