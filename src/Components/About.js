import React, {useState, useEffect} from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function About() {

    const [aboutmeData, setAboutmeData] = useState({})

    useEffect(() => {
        fetch('/resumeData.json')
        .then(response => response.json())
        .then(data => {
            let resumeData = data.about
            setAboutmeData(resumeData)
        })
    }, [])

    const renderParagraphs = () => {
        if (aboutmeData.text_paragraphs) {
            return aboutmeData.text_paragraphs.map(paragraph => {
                return (
                    <p>{paragraph}</p>
                )
            })
        }
    }

    return (
        <div id="about" style={{backgroundImage: `url(${aboutmeData.background_image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "5%"}}>
            <Container fluid style={{backgroundColor: "#333", color: "white", padding: "3%"}}>
                <h2>About Me</h2>
                <hr style={{borderTop: "3px solid white"}}/>            
            <Row>
                <Col xs={12} md={4}>
                    <Image src={aboutmeData.image} alt="John Reiner"  style={{width: "100%"}} thumbnail={false} />
                </Col>
                <Col xs={12} md={8}>
                <h4>{aboutmeData.title}</h4>
                <br></br>
                    {renderParagraphs()}
                </Col>
            </Row>
            </Container>
        </div>
        
    )
}