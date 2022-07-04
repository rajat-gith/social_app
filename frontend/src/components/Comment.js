import React from "react";
import { Card } from "react-bootstrap";
import { Form, Button, Row, Col } from "react-bootstrap";

function Comment({ comment }) {
  return (
    <Card className="m-3 p-3 rounded">
      <Card.Body>
        <Card.Text as="h5">{comment.body}</Card.Text>
        <Card.Text as="p">commented By: {comment.name}</Card.Text>
    </Card.Body>
    </Card>
  );
}

export default Comment;
