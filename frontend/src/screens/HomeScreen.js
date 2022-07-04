import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { listPosts} from '../actions/postAction'
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
      <h1 className="text-primary mt-3">POSTS</h1>
      <Col>
        {posts?.map((post) => (
          <Col key={post._id}>
            <Post post={post}/>
          </Col>
        ))}
      </Col>

    </div>
  )
}

export default HomeScreen