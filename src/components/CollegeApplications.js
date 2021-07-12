import React from 'react'
import {Route, Link} from 'react-router-dom'
import CollegeApplication from './CollegeApplication'


const CollegeApplications = (props) => {

    return (
        <div>
            <h1>All College Applications:</h1>
            {props.college_applications.map(college_application => 
            <li key={college_application.id}>
                <Link to={`/college_applications/${college_application.id}`}>{college_application.name} || {college_application.app_type} || {college_application.level}</Link>
            </li>
            )}
        </div>
    )

}

export default CollegeApplications