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
                                <Button variant="link" >GitHub Repo</Button>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button href={project.demo} target="_blank" style={{borderRadius: '0', marginRight: '5px'}}>Demo</Button>
                                {/* <Button style={{borderRadius: '0'}}></Button> */}
                                <Button style={{borderRadius: '0', float: "right"}}>More Info</Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                )
            })            
        }
    }
    
    const renderWorking = () => {
        if (portfolioData.working) {
            return (
                <Row>
                    <Col xs={12} md={8}>
                        <h2>Currently Working on...</h2>
                        <Image style={{height: "200px"}} src={portfolioData.working.topic_image} fluid />
                        <p>{portfolioData.working.topic_description}</p>                    
                    </Col>
                    <Col xs={6} md={4}>
                        <Card style={{borderRadius: '0' }}>
                            <Card.Img variant="top" src={portfolioData.working.project_image} />
                            <Card.Body>
                                <Card.Title>{portfolioData.working.topic}</Card.Title>
                                <Card.Text>{portfolioData.working.project_description}</Card.Text>
                                <Button style={{borderRadius: '0'}} href={portfolioData.working.github} target="_blank" variant="primary">Link to Github Repo</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )
        }       
    }

    return (
        <div id="portfolio" style={{backgroundImage: `url(${portfolioData.background_image})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "5%"}}>
            <Container fluid style={{backgroundColor: "white", padding: "3%"}}>
            <h2>My Favorite Projects</h2>
                <CardGroup>
                    {renderProjectCards()}
                </CardGroup>
                    <Button size="lg" style={{borderRadius: '0', marginTop: "20px"}} href="https://github.com/john-reiner" target="_blank" >View All My Projects</Button>
                </Container>
                <Container fluid style={{backgroundColor: "white", marginTop: "5%", padding: "3%"}}>
                    <Row>
                        {renderWorking()}
                    </Row>
            </Container>
        </div>
    )
}
