//Updating part of our store that has to do with collegeApplications
//Reducer is a function
//State will mostly be an object. You can return just an array, but it can get messy.

export default function collegeApplicationReducer(state = {college_applications: []}, action) {
    switch(action.type){
        case 'FETCH_COLLEGE_APPLICATIONS':
            return {college_applications: action.payload}
        case 'ADD_COLLEGE_APPLICATION':
            return {...state, college_applications: [...state.college_applications, action.payload]}
        default:
            return state
    }

}