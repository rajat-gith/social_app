import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Post({ post }) {
  return (
    <Card className="m-3 p-3 rounded">
        <Card.Body>
            <Link to={`/post/${post._id}`}>
                  <larger><strong>{post.title}</strong></larger>  
            </Link>
            <Card.Text as="p">
              Posted By: {post.creator}
            </Card.Text>
            <Card.Text as="p">
                {post.content}
            </Card.Text>
            <Card.Text as="p">
                Posted on: {post.created_on.slice(0,10)}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Post