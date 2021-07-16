import React from 'react'
import {Route, Link} from 'react-router-dom'
import HeroSection from './HeroSection'
import '../style.css'

const CollegeApplications = (props) => {

    return (
        <div>
            <HeroSection /><br></br>
            <div id='applications-container'>
                <h1>All College Applications:</h1>
                {props.college_applications.map(college_application => 
                <li key={college_application.id}>
                    <Link to={`/college_applications/${college_application.id}`}>{college_application.name}</Link>
                </li>
                )}
            </div>
        </div>
    )

    }

export default CollegeApplications