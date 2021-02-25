import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Document, Page } from 'react-pdf'

import ResumePdf from '../assets/Resume.pdf'

const Resume = () => {
    return (
        <Container style={{minHeight: '100vh', paddingTop: '75px'}}>
            <Row className='page-header p-3 mb-5'>
                <h1>Resume</h1>
            </Row>
            <Row className='justify-content-center'>
                {/* <object data={ResumePdf} width='100%' height='1100'>Resume</object> */}
                <Document file={ResumePdf} options={{workerSrc: "pdf.worker.js"}} renderMode='canvas'>
                        <Page pageNumber={1}/>
                </Document>
            </Row>
            
        </Container>
    )
}

export default Resume