import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


export default function Education(props) {

    const renderSkills = () => {
        if (props.subjects) {
            let key = 0
            return props.subjects.map(skill => {
                key ++
                return <li key={key}>{skill}</li>
            })
        }
    }

    return (
        <Container > 
            <Row>
                <Col col={4}>
                    <p>{props.start} - {props.end}</p>
                </Col>
                <Col col={8}>
                    <h4>{props.name}</h4>
                    <ul >{renderSkills()}</ul>
                </Col>
            </Row>
        </Container>
    )
}
