import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Profile from '../assets/roy_flores_profile.jpg'
import myInfo from '../assets/myInfo.js'

const About = () => {
    return (
        <Container style={{paddingTop: '75px'}}>
            <Row className='page-header p-3'>
                <h1>About Me</h1>
            </Row>
            <Row className='mt-5'>
                <Col md={4}>
                    <Image src={Profile} fluid rounded/>
                </Col>
                <Col>
                    <p>{myInfo.bio}</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About