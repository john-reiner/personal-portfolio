import React from 'react'

import {Container, Row, Col, Jumbotron, Image} from 'react-bootstrap'




export default function Home(props) {

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron fluid style={{backgroundColor: 'white'}}>
                        <Container>
                            <Row>
                                <Col xs={6} sm={8} >
                                    <h1>While true: {'{Learn}'} </h1>
                                    <h3>Never stop exploring</h3>
                                    <p>Checkout some of my projects below </p>
                                </Col>
                                <Col xs={6} sm={4} className="ml-auto">
                                    <Image src="me.jpg" fluid rounded style={{height: "300px"}} />
                                </Col>
                            </Row>
                        </Container>
                    </Jumbotron>
                    <Container>
                        <Row>
                            <Col xs>First, but unordered</Col>
                            <Col xs={{ order: 12 }}>Second, but last</Col>
                            <Col xs={{ order: 1 }}>Third, but second</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
