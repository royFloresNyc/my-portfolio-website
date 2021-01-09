import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Modal, Form, Button } from 'react-bootstrap'

import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
    const [modalVisible, setModalVisible] = useState(false)

    const formSubmitHandler = (e) => {
        e.preventDefault()
        console.log('!!!Submit Form!!!')
        setModalVisible(false)
    }

    return (
        <>
            <Navigation modalHandler={() => setModalVisible(true)}/>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/' component={Home}/>
            </Switch>
            <Modal show={modalVisible} onHide={() => setModalVisible(false)} centered>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={formSubmitHandler}>
                            <Form.Group controlId='contactFormName'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type='text' name='name' placeholder="Please Enter Your Name"/>
                            </Form.Group>
                            <Form.Group controlId='contactFormEmail'>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' name='email' placeholder='Please Enter Your Email Address'/>
                            </Form.Group>
                            <Form.Group controlId='contactFormMessage'>
                                <Form.Label>Message</Form.Label>
                                <Form.Control as='textarea' rows={5} name='message' placeholder='Please Enter Your Message'/>
                            </Form.Group>
                            <Button variant='dark' type='submit'>Submit</Button>
                        </Form>
                    </Modal.Body>
            </Modal>
        </>
    );
}

export default App;
