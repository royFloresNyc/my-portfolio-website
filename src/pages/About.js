import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Profile from '../assets/roy_flores_profile.jpg'

const About = () => {
    return (
        <Container style={{paddingTop: '58px'}}>
            <Row>
                <Col md={4} className='p-3'>
                    <Row className='page-header p-3 d-flex justify-content-center'>
                        <h1>About Me</h1>
                    </Row>
                    <Image src={Profile} fluid roundedCircle className='border-black-md mt-5'/>
                </Col>
                <Col className='about-me bg-black text-white p-5' >
                    <p>I am a <b>Full Stack Web and Mobile App Developer</b> with experience in <b>Ruby</b> and <b>JavaScript</b> libraries and frameworks. And I am curious; curious about life, places, and technology.</p>
                    <p>Before pursuing a career in the tech industry, I had a decade long career as a theatre actor. Some notable experiences include the National Touring production of Kathleen Marshall’s Broadway revival of the classic <b>Anything Goes</b>, as well as playing the roles of <i>Jesus</i> in <b>Godspell</b>, and <i>Chino</i> in <b>West Side Story</b>.</p>
                    <p>My training from the <a href='https://flatironschool.com/' target='_blank' rel='noreferrer'><b>Flatiron School</b></a>’s Software Engineering program, paired with self-education and independent research, provided me with a good foundation and understanding of <b>Ruby</b> and <b>Javascript</b>, as well as libraries and frameworks like <b>Rails</b>, <b>NodeJS</b>, <b>Express</b>, <b>React</b>, <b>Redux</b>, and <b>React Native</b>.</p>
                    <p>I’m continually pursuing knowledge and understanding of technologies that are relevant to the Software Engineering community. I have been diligently writing about my new discoveries and experiences on <a href='https://royfloresnyc.medium.com/' target='_blank' rel='noreferrer'><b>Medium</b></a>, and some of my articles have been published in online publications like <b>Noteworthy</b> and <b>The StartUp</b>.</p>
                    <p>I am fluent in <b>English</b>, <b>Tagalog</b>, and my native tongue, <b>Abaknon</b>. I am also working on improving my <b>Spanish</b> skills.</p>
                    <p>My curiosity has also taken me all over the world. I enjoy documenting my travels with photo and video contents that I publish on <a href='https://www.instagram.com/pinoyandajew/' target='_blank' rel='noreferrer'><b>instagram</b></a> and <a href='https://www.youtube.com/c/PinoyAndAJew/videos' target='_blank' rel='noreferrer'><b>youtube</b></a>.</p>
                    <p>Throughout my career, I have shown and proven my adaptability, my ability to learn quickly, my grit, and my resilience. I am excited about companies building technology that creates a positive impact on the world we live in, making the human experience a little better each day.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About