import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listPostDetails } from "../actions/postAction";
import Comment from "../components/Comment";
import { postComment, listComments } from "../actions/postAction";

function PostScreen({ match }) {
  const [comment, setComment] = useState("");
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);
  const { post } = postDetails;

  const commentList = useSelector((state) => state.commentList);
  const { comments } = commentList;

  useEffect(() => {
    dispatch(listPostDetails(match.params.id));
    dispatch(listComments());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment != "" && userInfo.name != "") {
      dispatch(postComment(Number(match.params.id), comment, userInfo.name));
    } else {
      alert("Some Error Occured");
    }
  };
  return (
    <Card className="m-3 p-3 rounded">
      <Card.Body>
        <h3>
          <b>{post.title}</b>
        </h3>
        <Card.Text>{post.content}</Card.Text>
        <Col>
          {comments
            ?.filter((comment) => {
              if (Number(comment.post_id) === Number(match.params.id)) {
                return comment;
              }
            })
            .map((comment) => (
              <Col key={comment._id}>
                <Comment comment={comment} />
              </Col>
            ))}
        </Col>
      </Card.Body>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="comment">
          <Form.Label>Add Comment</Form.Label>
          <Form.Control
            required
            type="name"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button className="mt-3" type="submit" variant="primary">
          Comment
        </Button>
      </Form>
    </Card>
  );
}

export default PostScreen;
