import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listPostDetails } from "../actions/postAction";

function PostScreen({ match }) {
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const postDetails = useSelector((state) => state.postDetails);
  const { post } = postDetails;

  useEffect(() => {
    dispatch(listPostDetails(match.params.id));
  }, []);

  return (
    <Card className="m-3 p-3 rounded">
      <h1>Hey there</h1>
      <Card.Body>
        <Link to={`/post/${post._id}`}>
          <strong>{post.title}</strong>
        </Link>
        <Card.Text>
          <p>{post.content}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostScreen;
