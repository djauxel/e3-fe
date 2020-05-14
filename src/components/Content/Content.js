import React, { Component } from 'react';
import './Content.css'
<<<<<<< HEAD
=======
import AssessmentList from '../AssessmentList/AssessmentList';
import StudentForm from '../Forms/StudentForm';
import FacultyForm from '../Forms/FacultyForm';
>>>>>>> 83ceb0c197fa26c688e66b0756241bc77f39736b

class Content extends Component {
    render() {
        return (
            <div className="content">
<<<<<<< HEAD
                <h1>This is the content</h1>
                <h1>This is the content</h1>
                <h1>This is the content</h1>
                <h1>This is the content</h1>
                <h1>This is the content</h1>
                <h1>This is the content</h1>
=======
                {/* <AssessmentList /> */}
                {/* <StudentForm /> */}
                <FacultyForm />
>>>>>>> 83ceb0c197fa26c688e66b0756241bc77f39736b
            </div>
        );
    }
}

export default Content;