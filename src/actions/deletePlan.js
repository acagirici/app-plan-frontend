export const deletePlan = (planId, college_applicationId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/college_applications/${college_applicationId}/plans/${planId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(college_application => dispatch({type: 'DELETE_PLAN', payload: college_application}))
    }
}