import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

export default function Resume() {
    return (
        <Container style={{paddingTop: "30px"}}>
            <Row>
                <Col xs={6} md={4}>
                    Left Side 
                </Col>
                <Col xs={12} md={8} style={{backgroundColor: "#333"}}>
                    Right Side
                </Col>
            </Row>
        </Container>
    )
}
