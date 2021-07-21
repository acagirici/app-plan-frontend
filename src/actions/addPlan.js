export const addPlan = (plan, college_applicationsId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/college_applications/${college_applicationsId}/plans`, {
            method: 'POST',    
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            body: JSON.stringify(plan)
        })
        .then(resp => resp.json())
        .then(college_application => {
                if (college_application.ettor) {
                    alert(college_application.error)
                } else {
                    dispatch({type: 'ADD_PLAN', payload: college_application})
                }
            }
            )
    }

}