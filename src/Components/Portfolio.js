import React from 'react'
import {Card, Col, Button, Container, Row} from 'react-bootstrap'

export default function Portfolio() {
    return (
        <div style={{backgroundImage: "url('portfolio_background.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "5%"}}>
            <Container fluid style={{backgroundColor: "white", padding: "3%"}}>
            <h2>My Favorite Projects</h2>
                <Row>
                    <Col>
                        <Card style={{borderRadius: '0'}}>
                            <Card.Img variant="top" src="background.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{borderRadius: '0'}}>
                            <Card.Img variant="top" src="background.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{borderRadius: '0'}}>
                            <Card.Img variant="top" src="background.jpg" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
                <Button style={{borderRadius: '0'}} >View All My Projects</Button>
                </Container>
                <Container fluid style={{backgroundColor: "white", marginTop: "5%", padding: "3%"}}>
                    <Row>
                        <Col>
                            <h2>Currently Working on...</h2>
                            <p>Right now I'm sharpenign my Node.js skills by taking this Udemy course. Below is the project im working on this week</p>
                            <Card className="text-center" style={{borderRadius: '0'}}>
                                <Card.Header>Example Working Project</Card.Header>
                                <Card.Body>
                                    <Card.Title>Project Name</Card.Title>
                                    <Card.Text>
                                    Description of Project 
                                    </Card.Text>
                                    <Button style={{borderRadius: '0'}}  variant="primary">Link to Github Repo</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">2 days ago</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}
