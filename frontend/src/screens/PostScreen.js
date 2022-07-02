import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listPostDetails } from "../actions/postAction";
import Comment from '../components/Comment'

function PostScreen({ match }) {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);
  const { post } = postDetails;

  useEffect(() => {
    dispatch(listPostDetails(match.params.id));
  }, []);

  return (
    // <div>
    //   <h1>{match.params.id}</h1>
    // </div>
    <Card className="m-3 p-3 rounded">
      <h1>Hey there</h1>
      <Card.Body>
        <Link to={`/post/${post.id}`}>
          <strong>{post.title}</strong>
        </Link>
        <Card.Text>
          <p>{post.content}</p>
        </Card.Text>
        <Row>
          {post.comments.map((comment) =>(
            <Col key={comment._id}>
              <Comment comment={comment}/>
            </Col>
          ))}
        </Row>

      </Card.Body>
      <Form>
        <Form.Group controlId="name">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>
    </Card>
  );
}

export default PostScreen;
