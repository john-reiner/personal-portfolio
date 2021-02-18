import React, {useState, useEffect} from 'react'
import {Card, Col, Button, Container, Row, Image, CardGroup} from 'react-bootstrap'

export default function Portfolio() {

    const [portfolioData, setPortfolioData] = useState({})

    useEffect(() => {
        fetch('/resumeData.json')
        .then(response => response.json())
        .then(data => {
            setPortfolioData(data.portfolio)
        })
    }, [])

    const renderProjectCards = () => {
        if (portfolioData.projects) {
            return portfolioData.projects.map(project => {
                return (
                    <Col>
                        <Card style={{borderRadius: '0'}}>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>
                                {project.description}
                                <Button href={project.github} target="_blank" variant="link" >GitHub Repo</Button>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button href={project.demo} target="_blank" style={{borderRadius: '0', marginRight: '5px'}}>Demo</Button>
                                {/* <Button style={{borderRadius: '0'}}></Button> */}
                                <Button href={project.info} target="_blank" style={{borderRadius: '0', float: "right"}}>More Info</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                )
            })            
        }
    }

    return (
        <div id="portfolio" style={{backgroundImage: `url(${portfolioData.background_image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "5%"}}>
            <Container fluid style={{backgroundColor: "white", padding: "3%"}}>
            <h2>My Projects</h2>
                <CardGroup>
                    {renderProjectCards()}
                </CardGroup>
                    <Button size="lg" style={{borderRadius: '0', marginTop: "20px"}} href="https://github.com/john-reiner" target="_blank" >My GitHub</Button>
                </Container>
        </div>
    )
}
