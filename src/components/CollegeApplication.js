import React from 'react'
import {redirect} from 'react-router-dom'

const CollegeApplication = (props) => {
    console.log(props)
    let college_application = props.college_applications.filter(college_application => college_application.id == props.match.params.id)[0]
    console.log(college_application)

    return (
        <div>
            <h2>
             {college_application ? college_application.name : null}
            </h2>
            <small>App Type: {college_application ? college_application.app_type : null} || App Level {college_application ? college_application.level : null}</small>
        </div>
    )
}

export default CollegeApplication