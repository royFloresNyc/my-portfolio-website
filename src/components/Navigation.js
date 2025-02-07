import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { FaGithub, FaMedium, FaLinkedin } from 'react-icons/fa'


const Navigation = ({ modalHandler }) => {
    return (
        <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='black' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <div className='justify-content-end order-sm-last'>
                            <a className='btn btn-social-icon' href='https://github.com/royFloresNyc' target='_blank' rel='noreferrer'>
                                <FaGithub style={{color: 'white', fontSize: 25}}/>
                            </a>
                            <a className='btn btn-social-icon' href='https://royfloresnyc.medium.com/' target='_blank' rel='noreferrer'>
                                <FaMedium style={{color: 'white', fontSize: 25}}/>
                            </a>
                            <a className='btn btn-social-icon' href='https://www.linkedin.com/in/roy-flores-5275601ab/' target='_blank' rel='noreferrer'>
                                <FaLinkedin style={{color: 'white', fontSize: 25}}/>
                            </a>
                    </div>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto order-lg-first'>
                            <Nav.Link href='/#/'>Home</Nav.Link>
                            <Nav.Link href='/#/about'>About</Nav.Link>
                            <Nav.Link href='/#/projects'>Projects</Nav.Link>
                            {/* <Nav.Link href='/#/resume'>Resume</Nav.Link> */}
                            <Nav.Link href='/#/blog'>Blog</Nav.Link>
                            {/* <Nav.Link href='#' onSelect={modalHandler}>Contact</Nav.Link> */}
                            <Nav.Link href='mailto:royfloresnyc@gmail.com'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation