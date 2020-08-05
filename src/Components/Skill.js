import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default function Skill(props) {
    
    let name = props.name.toLowerCase()
    let pathName = name.replace(/\.|\s/g,'')

    return (
        <Row>
            <Col>
            <img alt={props.name} style={{height: "3em"}} src={`/icons/${pathName}/${pathName}-plain.svg`}/>
            </Col>
            <Col>{props.name}</Col>
        </Row>
    )
}
