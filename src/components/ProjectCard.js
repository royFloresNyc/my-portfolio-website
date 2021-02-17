import React from 'react'
import { Col, Button, Image, Row, Badge } from 'react-bootstrap'
import { FaGithub, FaPlayCircle } from 'react-icons/fa'

const ProjectCard = ({ appType, logo, description, stack, links }) => {
    const renderButtons = () => {
        return links.map((linkObj, indx) => <Button key={indx} className='mr-0 ml-0 mr-sm-3 ml-sm-3' variant='white' size='sm' style={{color: 'white'}}
                href={linkObj.link} target='_blank' rel='noreferrer'>
                <span>
                    {renderBtnIcon(linkObj.type)}
                </span> {linkObj.label}
            </Button>
        )
    }

    const renderBtnIcon = (type) => {
        switch(type){
            case 'github':
                return <FaGithub style={{color: 'white', fontSize: 20}}/>
            case 'demo':
                return <FaPlayCircle style={{color: 'white', fontSize: 20}}/>
            default:
                return null
        }
    }

    return (
        <div className='col-lg-8 offset-lg-2 mt-5 mb-5 border border-secondary rounded'>
            <Badge pill variant='info' className='project-badge'>
                {appType}
            </Badge>
            <Row>
                <Col sm={4} className='proj-logo'>
                    <Image src={logo} fluid/>
                </Col>
                <Col sm={8} className='d-flex align-items-center'>
                    <Row className='d-flex align-items-center'>
                        <p className='pt-3 ml-2'>
                            {description}
                        </p>
                        <p className='pt-3 ml-2'><strong>Built with: </strong> {stack}</p>
                    </Row>
                </Col>
            </Row>
            <Row className='proj-btns pt-1 pb-1'>
                <Col md={{span: 7, offset: 3}}>
                    {renderButtons()}
                </Col>
            </Row>
        </div>
    )
}

export default ProjectCard 