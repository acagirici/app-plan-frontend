import React from 'react'
import PlansContainer from '../containers/PlansContainer'
import '../style.css'

const CollegeApplication = (props) => {
    console.log(props)
    //
    let college_application = props.college_applications.filter(college_application => college_application.id == props.match.params.id)[0]
    console.log(college_application)

    return (
        <div style={{textAlign: 'Center'}}>
            <h2>
             {college_application ? college_application.name : null}
            </h2>
            <small>App Type: {college_application ? college_application.app_type : null} || App Level {college_application ? college_application.level : null}</small>
            <PlansContainer college_application={college_application}/>
        </div>
    )
}

export default CollegeApplication