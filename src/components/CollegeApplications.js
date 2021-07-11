import React from 'react'

const CollegeApplications = (props) => {

    return (
        <div>
            {props.college_applications.map(college_applications => 
            <li key={college_applications.id}>{college_applications.name} || {college_applications.level} || {college_applications.app_type}</li>
            )}
        </div>
    )

}

export default CollegeApplications