import React from 'react'

import {Container, Row, Col, Jumbotron, Image, Card, Button} from 'react-bootstrap'


export default function Home(props) {

    return (
        <div style={{paddingTop: "30px", }}>
            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid style={{backgroundColor: 'black'}} >
                            <Container>
                                <Row>
                                    {/* <Col xs={6} sm={4} className="ml-auto">
                                        <Image src="me.jpg" fluid rounded style={{height: "300px"}} />
                                    </Col>                             */}
                                    <Col xs={6} sm={8} >
                                        <h1>Hi! I'm John</h1>
                                        <h3>Full Stack Web Developer</h3>
                                        <p>Checkout some of my projects below...</p>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Jumbotron fluid>
                            <Container>
                                <Row>
                                    <Col>
                                        <Card>
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
                                        <Card>
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
                                        <Card>
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
                                <Button>View All My Projects</Button>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
