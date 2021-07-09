import React from 'react';
import { connect } from 'react-redux'
import { fetchCollegeApplications } from './actions/fetchCollegeApplications'

class App extends React.Component {

  componentDidMount(){
    // fetch('http://localhost:3000/api/v1/college_applications')
    //   .then(resp => resp.json())
    //   .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null, {fetchCollegeApplications})(App);
