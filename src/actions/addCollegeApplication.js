export const addCollegeApplication = (data) => {

    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/college_applications', {
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }, 
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(data => dispatch({type: 'ADD_COLLEGE_APPLICATION', payload: data}))
    }

}