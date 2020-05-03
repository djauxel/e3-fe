import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

import "./StudentForm.css";

class AssessmentForm extends Component {
  render() {
    return (
      <div className="studentForm">
        <h1>Student Assessment Form</h1>
        <Form>
          <Form.Group controlId="studentName">
            <Form.Label>Student's name</Form.Label>
            <Form.Control disabled type="text" placeholder="William Cobb" />
          </Form.Group>

          <Form.Group controlId="studentID">
            <Form.Label>Student ID</Form.Label>
            <Form.Control disabled type="text" placeholder="002376185" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="instructorName">
              <Form.Label>Instructor name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="instructorEmail">
              <Form.Label>Instructor email</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="courseName">
              <Form.Label>Course name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="semester">
              <Form.Label>Semester</Form.Label>
              <Form.Control type="text" placeholder="ex. Spring 2020" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AssessmentForm;
