import React from 'react'

const Plans = (props) => {
    
    console.log(props.plans)
    return (
        <div>
            {props.plans && props.plans.map(plan =>
            <li key={plan.id}><h3>{plan.college_name}</h3>
                {plan.app_deadline}</li>
                )}
        </div>
    )
}

export default Plans