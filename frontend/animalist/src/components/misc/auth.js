import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/react-hooks";
import { AUTH_TOKEN } from "../constants/constants";
// import "./Auth.css";
import { Form, Container } from "react-bootstrap";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $username: String!
  ) {
    signup(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export function SignIn() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: "",
    password: "",
    username: "",
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      navigate("/");
    },
  });

  const [signup] = useMutation(SIGNUP_MUTATION, {
    variables: {
      username: formState.username,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup.token);
      navigate("/");
    },
  });

  return (
    <Container>
      <h1>Log in</h1>
      <Form className="login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="login-field"
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="login-field"
              value={formState.password}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  password: e.target.value,
                })
              }
            />
          </div>
        </Form.Group>
      </Form>

      <button className="login-button" onClick={() => console.log("Logged In")}>
        Log in
      </button>
    </Container>
  );
}
