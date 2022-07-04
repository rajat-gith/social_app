import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Post({ post }) {
  return (
    <Card className="m-3 p-3 rounded shadow-lg p-4 mb-4 bg-white">
      <Card.Body>
        <h3>{post.title}</h3>
        <Card.Text as="p">Posted By: {post.creator}</Card.Text>
        <Card.Text as="p">{post.content}</Card.Text>
        <Card.Text as="p">Posted on: {post.created_on.slice(0, 10)}</Card.Text>
        <Link to={`/post/${post._id}`}>
          <h6>Read More..</h6>
        </Link>
      </Card.Body>
    </Card>
  );
}
export default Post;
