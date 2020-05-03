import React, { Component } from 'react';
import './Content.css'
import AssessmentList from '../AssessmentList/AssessmentList';
import StudentForm from '../Forms/StudentForm';
import FacultyForm from '../Forms/FacultyForm';

class Content extends Component {
    render() {
        return (
            <div className="content">
                {/* <AssessmentList /> */}
                {/* <StudentForm /> */}
                <FacultyForm />
            </div>
        );
    }
}

export default Content;