export const addPlan = (plan, college_applicationsID) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/college_applications/${college_applicationsID}/plans`, {
            method: 'POST',    
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(plan)
        })
        .then(resp => resp.json())
        .then(college_application => dispatch({type: 'ADD_PLAN', payload: college_application}))
    }

}