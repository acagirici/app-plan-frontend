//function below is our action creator
//what we return from the function is an action object (action as called)

export function fetchCollegeApplications() {
    //needed to dispatch in action creator
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/college_applications')
        .then(resp => resp.json())
        .then(college_applications => dispatch({
            //dispatch must have a type
            type: 'FETCH_COLLEGE_APPLICATIONS',
            payload: college_applications
        }))
    }
}
