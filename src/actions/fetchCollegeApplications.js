//function below is our action creator
//what we return from the function is an action object (action as called)

export function fetchCollegeApplications() {
    
    fetch('http://localhost:3000/api/v1/college_applications')
      .then(resp => resp.json())
      .then(data => console.log(data))

}