import React, { useState, useEffect } from "react";
import { Link ,useHistory} from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer.js";
import { login } from "../actions/userActions";


function LoginScreen({ location }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history=useHistory()
  const dispatch = useDispatch();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo,"home block triggered")
      history.push(redirect);
    }
  }, [userInfo,history,redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));

  };

  return (
    <Card className='m-5 pb-5 shadow-lg p-4 mb-4 bg-white'>
      <Card.Header className='mt-3' as="h3">LOGIN</Card.Header>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label className='mt-3' as='h5'>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              className='mt-3'
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label as='h5'>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={password}
              className='mt-3'
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button className="mt-3" type="submit" variant="primary">
            Sign In
          </Button>
        </Form>

        <Row className="py-3 ">
          <Col>
            New Customer?{" "}
            <Link
              to='/register'
            >
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </Card>
  );
}

export default LoginScreen;
