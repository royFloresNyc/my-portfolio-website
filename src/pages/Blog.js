import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'

import BlogCard from '../components/BlogCard'

const Blog = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40royfloresnyc")
        .then(resp => resp.json())
        .then(data => {
            const items = data.items;
            //const posts = items.filter((item) => item.categories.length > 0);
            setBlogs(items)
        })
    }, [])

    const renderBlogs = () => {
        return blogs.map((blog, indx) => <BlogCard key={indx} blog={blog}/>)
    }

    return (
        <Container style={{paddingTop: '75px'}}>
            <Row className='page-header p-3 mb-5'>
                <h1>Blog</h1>
            </Row>
            <Row xs={1} md={2} lg={3} className='p-3'>
                {blogs ? renderBlogs() : null}
            </Row>
        </Container>
    );

}

export default Blog;
