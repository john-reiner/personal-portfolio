import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function About() {
    return (
        <Container style={{backgroundColor: "#333", color: "white"}}>
            <br></br>
            <h1>About Me</h1>
            <h4>Recent Flatiron School grad, Full Stack Web Developer and technology enthusiast.</h4>
            <br></br>
            <p>I started my career in banking. There I learned the necessary skills of teamwork, sales, customer service and leadership. I take a passion for leading by example and motivating my peers and team around me in and out of my network.</p>
            
            <Row>
                <Col xs={6} md={8}>
                    <p>I found programming a few years ago, I found myself asking the question of how programs and the internet actually works. In that question I found a new passion. In the beginning of my journey I started by Learning the languages of Ruby and Python, following along with simple tutorials I learned the basics of programming. I decided to attend the Flatiron School after not knowing where to take my journey next. Flatiron taught me a lot, I developed a firm understanding of Full Stack Web Development. More importantly Flatiron taught me how to learn in the technology industry. I gained the confidence I need to take on any challenge that I sent my mind to. Being humble while actively striving for the best is a practice that I will always continue to develop. I now believe that becoming a great developer involves being a Google wizard.</p>
                </Col>
                <Col xs={6} md={4}>
                    <Image style={{width: "100%"}} src="aboutme_cohort.jpg" rounded />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>In my free time I enjoy playing the guitar, traveling, the company of my friends and family and new experiences. Currently I am sharpening my skills in the game of Chess.</p>
                </Col>
            </Row>
            <Row>
            <Col xs={6} md={8}>
            <p>Please feel free to network and reach out! Let's start a conversation! My email is John.a.reiner@gmail.com</p> 
                </Col>
                <Col xs={6} md={4}>
                    <Image style={{width: "100%"}} src="aboutme_cohort.jpg" rounded />
                </Col>
            </Row>
            
        </Container>
    )
}