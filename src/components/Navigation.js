import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link>
                            <NavLink className="navlink" to='/'>Home</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="navlink" to='/about'>About</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="navlink" to='/projects'>Projects</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className="navlink" to='/contact'>Contact</NavLink>
                        </Nav.Link>
                    </Nav>
                 </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Navigation