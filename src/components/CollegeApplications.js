import React from 'react'
import {Link} from 'react-router-dom'
import '../style.css'


const CollegeApplications = (props) => {



    return (
        <div>
            <div id='applications-container'>
                <h1>All College Applications:</h1>
                {props.college_applications && props.college_applications.map(college_application => 
                <li key={college_application.id}>
                    <Link to={`/college_applications/${college_application.id}`}>{college_application.name}</Link>
                </li>
                )}
            </div>
        </div>
    )

    }

    export default CollegeApplications
