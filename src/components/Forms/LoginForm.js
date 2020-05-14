import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    return (
      <div className="loginForm">
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control type="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label htmlFor="email">Enter your password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
