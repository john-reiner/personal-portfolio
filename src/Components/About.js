import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function About() {
    return (
        <div style={{backgroundImage: "url('portfolio_background.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "5%"}}>
            <Container fluid style={{backgroundColor: "#333", color: "white", padding: "3%"}}>
                <h2>About Me</h2>
                <hr style={{borderTop: "3px solid white"}}/>            
            <Row>
                <Col xs={12} md={4}>
                    <Image src="me.jpg" alt="John Reiner"  style={{width: "100%"}} thumbnail={false} />
                </Col>
                <Col xs={12} md={8}>
                <h4>Full Stack Web Developer and technology enthusiast.</h4>
                <br></br>
                <p>I started my career in banking. There I learned the necessary skills of teamwork, sales, customer service and leadership. I take a passion for leading by example and motivating my peers and team around me in and out of my network.</p>
                <p>I found programming a few years ago, I wanted to know how computers actually work and network together. In that question I found a new passion. In the beginning of my journey I started by Learning the languages of Ruby and Python, following along with simple tutorials I learned the basics of programming. I decided to attend the Flatiron School after not knowing where to take my journey next. Flatiron taught me a lot, I developed a firm understanding of Full Stack Web Development. More importantly Flatiron taught me how to learn and grow in the technology industry. I gained the confidence I need to take on any challenge that I sent my mind to. Being humble while actively striving for the best is a practice that I will always continue to develop. I now believe that becoming a great developer involves being a Google wizard.</p>
                <p>In my free time I enjoy playing the guitar, traveling, the company of my friends and family and new experiences. Currently I am sharpening my skills in the game of Chess.</p>
                <p>Please feel free to network and reach out! Click on the "Contact" button on the top right corner to start a conversation My email is <a href="mailto:john.a.reiner@gmail.com">John.a.reiner@gmail.com</a></p>
                </Col>
            </Row>
            </Container>
        </div>
        
    )
}