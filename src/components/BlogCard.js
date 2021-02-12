import React from 'react'
import { Col, Card } from 'react-bootstrap'
import moment from 'moment'

function BlogCard({ blog }) {

    const getSnippet = () => {
        let snippet = blog.content.split("<p>")
        snippet = snippet[1].split(" ")
        snippet.length = 35
        snippet = snippet.join(' ') + ' ... '+ renderRedirectLink()
        return snippet 
    }

    const renderRedirectLink = () => {
        return `<a href=${blog.link} target="_blank" rel="noreferrer"><i>Read more</i></a>`

    }

    return (
        <Col className='mb-5'>
            <Card className='border-0'>
                <Card.Img className='blog-image' variant="top" src={blog.thumbnail}/>
                <Card.Body className='pl-0 pr-0'>
                    <Card.Title><b>{blog.title}</b></Card.Title>
                    <Card.Subtitle className='mb-2 text-muted blog-date'>{moment(blog.pubDate).format("MMM DD, YYYY")}</Card.Subtitle>
                    <Card.Text dangerouslySetInnerHTML={{ __html: getSnippet() }} className='text-secondary blog-content'>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default BlogCard;