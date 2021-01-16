import React from 'react'
import { Container, Row } from 'react-bootstrap'

import ProjectCard from '../components/ProjectCard'
import { projects } from '../assets/myInfo.js'

const Projects = () => {

    const renderProjects = () =>{
        return projects.map((proj, indx) => <ProjectCard key={indx} {...proj}/>) 
    }

    return (
        <Container id='projects' style={{paddingTop: '75px'}}>
            <Row className='page-header p-3 mb-5'>
                <h1>Projects</h1>
            </Row>
            {renderProjects()}
        </Container>
    )
}

export default Projects