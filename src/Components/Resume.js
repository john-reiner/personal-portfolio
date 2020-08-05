import React, {useState, useEffect} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'



import Education from './Education'
import Experience from './Experience'
import Skill from './Skill'

export default function Resume() {

    const [resumeData, setResumeData] = useState({})

    useEffect(() => {
        fetch('/resumeData.json')
        .then(response => response.json())
        .then(data => {
            let resumeData = data.resume
            setResumeData(resumeData)
        })
    }, [])

    console.log(resumeData)

    const renderEducaiton = () => {
        if (resumeData.education) {
            let key = 0 
            return resumeData.education.map(school => {
                key ++
                return <Education key={key} name={school.name} start={school.start} end={school.end} subjects={school.subjects} />
            })            
        }

    }

    const renderExperience = () => {
        if (resumeData.education) {
            let key = 0 
            return resumeData.experience.map(job => {
                key ++
                return <Experience key={key} name={job.name} title={job.title} start={job.start} end={job.end} skills={job.skills} />
            })            
        }
    }

    const renderLangs = () => {
        if (resumeData.skills) {
            let key = 0
            return resumeData.skills.map(skill => {
                if (skill.type === 'language') {
                    key ++
                    return <Skill key={key} name={skill.name} />                    
                }
                return null
            })            
        }
    }

    const renderTechs = () => {
        if (resumeData.skills) {
            let key = 0
            return resumeData.skills.map(skill => {
                if (skill.type === 'technology') {
                    key ++
                    return <Skill key={key} name={skill.name} />                    
                }
                return null
            })            
        }
    }

    return (
        <div style={{backgroundImage: "url('portfolio_background.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", padding: "5%"}}>
            <Container fluid style={{backgroundColor: "white", padding: "3%"}}>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="resume.png" alt="John Reiner" style={{height: "200px", backgroundColor: "#333", borderRadius: "0"}} thumbnail />
                        <h2 style={{paddingTop: '2em'}} >John Reiner</h2>
                        <h4 style={{color: 'grey'}} >Full Stack Web Engineer</h4>
                        <hr style={{borderTop: "3px solid #333"}}/>
                        <p>Front End Engineer with working knowledge of Full Stack Web Development. Powerful front end  programming skills and proficiency in React, Javascript, HTML, and CSS. A strong understanding of ES6 and modern CSS features including Flexbox and Bootstrap. 
                        <br></br>
                        <br></br>
                        5 years experience working in the banking and financial industry with a focus on Sales and Customer Service. Strong track record of leading teams and representing departments on cross functional teams. Excellent at resolving complex problems and strong communication skills. </p>
                        <hr style={{borderTop: "3px solid #333"}}/>
                        <h5>Location</h5>
                        <p>Keyport, New Jersey 07735</p>
                        <h5>Email</h5>
                        <p><a href="mailto:john.a.reiner@gmail.com" >John.a.Reiner@gmail.com</a></p>
                        <h5>GitHub</h5>
                        <p><a href="https://github.com/jareiner90" target="_blank" rel="noopener noreferrer"> john-reiner </a></p>
                        <hr style={{borderTop: "3px solid #333"}}/>
                    </Col>
                    <Col xs={12} md={8} style={{backgroundColor: "#333", color: "white"}}>
                        <h2>Education</h2>
                        {renderEducaiton()}
                        <h2>Experience</h2>
                        {renderExperience()}
                        <hr style={{borderTop: "3px solid white"}}/>
                        <h2>Skills</h2>
                        <Row>
                            <Col >
                                <h4>Languages/Libraries</h4>
                                {renderLangs()}
                            </Col>
    
                            <Col>
                                <h4>Technologies</h4>
                                {renderTechs()}
                            </Col>
                        </Row>
                            
                    </Col>
                </Row>
            </Container>            
        </div>

    )
}

