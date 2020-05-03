import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

import "./FacultyForm.css";

class AssessmentForm extends Component {
  render() {
    return (
      <div className="facultyForm">
        <h1>Faculty Validate Form</h1>
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
              <Form.Control disabled type="text" placeholder="Simon Fan" />
            </Form.Group>

            <Form.Group as={Col} controlId="instructorEmail">
              <Form.Label>Instructor email</Form.Label>
              <Form.Control disabled type="text" placeholder="sfan@csusm.edu" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="courseName">
              <Form.Label>Course name</Form.Label>
              <Form.Control disabled type="text" placeholder="SE 370" />
            </Form.Group>

            <Form.Group as={Col} controlId="semester">
              <Form.Label>Semester</Form.Label>
              <Form.Control disabled type="text" placeholder="Spring 2020" />
            </Form.Group>
          </Form.Row>

          <div className="assessment">
            <Form.Group className="assessment-item">
              <Form.Label>Student attends class</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Can't determine"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Needs improvement"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Fair"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Good"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="Very good"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="assessment-item">
              <Form.Label>
                Student actively participates in the class as appropriate for
                the class
              </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Can't determine"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Needs improvement"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Fair"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Good"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="Very good"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="assessment-item">
              <Form.Label>Student turns in their homework</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Can't determine"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Needs improvement"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Fair"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Good"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="Very good"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="assessment-item">
              <Form.Label>
                Student submits quality work homework assignments
              </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Can't determine"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Needs improvement"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Fair"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Good"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="Very good"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="assessment-item">
              <Form.Label>
                Student performance on quizzes and/or tests
              </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Can't determine"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Needs improvement"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Fair"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Good"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="Very good"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>

            <Form.Group className="assessment-item">
              <Form.Label>
                Your best estimate of the grade that the student may be earning
                at this point in your course
              </Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Can't determine"
                    type={type}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="Needs improvement"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    label="Fair"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Good"
                    type={type}
                    id={`inline-${type}-4`}
                  />
                  <Form.Check
                    inline
                    label="Very good"
                    type={type}
                    id={`inline-${type}-5`}
                  />
                </div>
              ))}
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AssessmentForm;
