import React from 'react'
import { Container, Row, Col, Image} from 'react-bootstrap'

import Profile from '../assets/RoyAvatar.jpg'

const Home = () => {
    return (
        <Container className='d-flex align-items-center home' style={{paddingTop: '75px'}}>
            <Row className='d-flex align-items-center'>
                <Col className='col-12 order-12 col-lg-6 order-lg-first ml-lg-4 home-name'>
                    <h1 className='d-flex justify-content-center'>Roy Flores</h1>
                    <Row className='p-2 bg-black text-white d-flex justify-content-center'>
                        <h3>Software Engineer</h3>
                    </Row>
                </Col>
                <Col className='col-12 order-1 col-lg-6 order-lg-last' >
                    <Image className='border-black' src={ Profile } roundedCircle fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Home