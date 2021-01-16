import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Profile from '../assets/roy_flores_profile.jpg'
import { bio } from '../assets/myInfo.js'

const About = () => {
    return (
        <Container id='about' style={{paddingTop: '75px'}}>
            <Row className='page-header p-3 mb-5'>
                <h1>About Me</h1>
            </Row>
            <Row>
                <Col md={4}>
                    <Image src={Profile} fluid rounded/>
                </Col>
                <Col>
                    <p>{bio}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About