import React, {useState} from 'react';

import {Modal, Form, Button, Spinner} from 'react-bootstrap'

import Axios from 'axios'

export default function Contact(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [emailSent, setEmailSent] = useState(false)
    const [emailFail, setEmailFail] = useState(false)
    const [emailSending, setEmailSending] = useState(false)

    const handleNameChange = (event) => setName(event.target.value)
    const handleEmailChange = (event) => setEmail(event.target.value)
    const handleMessageChange = (event) => setMessage(event.target.value)


    const handleSubmit = (event) => {
        event.preventDefault()
        setDisabled(true)
        setEmailSent(false)

        // https://contactmeportfolio.herokuapp.com/send

        Axios.post('https://contactmeportfolio.herokuapp.com/send', {name, email, message})
            
            .then(res => {
                if (res.data.success) {
                    setEmailSending(false)
                    setDisabled(false)
                    setEmailSent(true)                    
                } else {
                    setEmailSending(false)
                    setDisabled(false)
                    // setEmailFail(true)                    
                }
            })
            .catch(err => {
                console.log('ERROR: ', err)
                setEmailSending(false)
                setDisabled(false)
                setEmailFail(true)   
            })
            setEmailSending(true)
    }

    return (
        <Modal
            size="lg"
            show={props.showContact}
            // show={true}
            onHide={() => props.setShowContact(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header  closeButton >
            <Modal.Title  id="example-modal-sizes-title-lg">
                Let's Talk
            </Modal.Title>
            </Modal.Header>
            <Modal.Body >
            
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={name} onChange={handleNameChange}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={email} onChange={handleEmailChange}></Form.Control>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label htmlFor="message" >Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" rows="3" value={message} onChange={handleMessageChange}></Form.Control>
                    </Form.Group>

                    <Button style={{borderRadius: "0"}} className="d-inline-block" type="submit" disabled={disabled}>
                        Send
                    </Button>

                    {emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                    {emailFail === true && <p className="d-inline error-msg">Email Not Sent</p>}
                    {emailSending === true && <div className="d-flex justify-content-center"><Spinner  animation="border" variant="primary" role="status"> <span className="sr-only">Loading</span> </Spinner></div> }
                </Form>

            </Modal.Body>
        </Modal>
    )
}
