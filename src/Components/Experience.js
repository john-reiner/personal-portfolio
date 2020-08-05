import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'


export default function Education(props) {

    const renderSkills = () => {
        if (props.skills) {
            let key = 1
            return props.skills.map(skill => {
                key += 1
                return <li key={key} >{skill}</li>
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
                    <h5>{props.title}</h5>
                    <ul >{renderSkills()}</ul>
                </Col>
            </Row>
        </Container>
    )
}