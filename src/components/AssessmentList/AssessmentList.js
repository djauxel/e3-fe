import React, { Component } from "react";
import "./AssessmentList.css";

class AssessmentForm extends Component {
  render() {
    return (
      <div>
        <a href="/#">
          <button className="add-assessment">
            <i className="fas fa-plus"></i>Add assessment form
          </button>
        </a>
        <div className="assessment-term">
          <h2>Spring 2020</h2>
          <ul className="list-assessment">
            <li>BIOL 104</li>
            <li>MATH 270</li>
            <li>PSCI 100</li>
            <li>SE 370</li>
          </ul>
        </div>
        <div className="assessment-term">
          <h2>Fall 2019</h2>
          <ul className="list-assessment">
            <li>CS 231</li>
            <li>CS 311</li>
            <li>LTWR 107</li>
            <li>MATH 162</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AssessmentForm;
