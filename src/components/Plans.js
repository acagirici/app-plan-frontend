import React from 'react'
import {connect} from 'react-redux'
import { deletePlan } from '../actions/deletePlan'
import '../style.css'

const Plans = (props) => {

    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "6px",
        fontFamily: "Cursive",
        textAlign: "Center"
      };

      const headingStyle = {
        textAlign: "Center",
        fontFamily: "Cursive",
        fontStyle: "Oblique"
      }
    
      const handleDelete = (plan) => {
        props.deletePlan(plan.id, plan.college_application_id)
      }

    return (
        <div id='content'>
            <h1 style={headingStyle}>Institution Notes/Plans:</h1>
            {props.plans && props.plans.map(plan =>
            <ul key={plan.id}><h3 style={myStyle}>{plan.college_name} <button onClick={() => handleDelete(plan)} className='delete-bttn'>Delete</button></h3>
                <li><strong>Application Deadline: </strong>{plan.app_deadline}</li>
                <li><strong>Application Fee: </strong>${plan.app_fee}</li>
                <li><strong>Visit Date: </strong>{plan.visit_date}</li>
                <li><strong>Visit Notes: </strong>{plan.visit_impressions}</li>
                <li><strong>Essay Topic(s): </strong>{plan.essay_topic}</li>
                <li><strong>Rating: </strong>{plan.rating}</li>
                </ul>
                )}
        </div>
    )
}

export default connect(null, { deletePlan }) (Plans)