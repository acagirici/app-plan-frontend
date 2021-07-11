import React from 'react'

const CollegeApplications = (props) => {

    return (
        <div>
            {props.college_applications.map(college_applications => 
            <li>{college_applications.name} || {college_applications.level}</li>)}
        </div>
    )

}

export default CollegeApplications