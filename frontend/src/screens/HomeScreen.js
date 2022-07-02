import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { listPosts,listPostDetails } from '../actions/postAction'
import { useDispatch, useSelector } from "react-redux";
import Post from '../components/Post'

function HomeScreen() {


  const dispatch = useDispatch();
  const postList = useSelector((state) => state.postList);
  const { error, loading, posts } = postList;

  useEffect(() => {
    dispatch(listPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>POSTS</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post._id}>
            <Post post={post}/>
          </Col>
        ))}
      </Row>

    </div>
  )
}

export default HomeScreen