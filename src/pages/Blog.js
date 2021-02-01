import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap'

const Blog = () => {
    useEffect(() => {
        window.mediumWidget()
        return () => {
            window.unmountMediumWidget()
        }
    }, [])


    return (
        <Container style={{paddingTop: '75px'}}>
            <Row className='page-header p-3 mb-5'>
                <h1>Blog</h1>
            </Row>
            <Row id="medium-widget" className='p-3'>
            </Row>
        </Container>
    );
}

export default Blog;