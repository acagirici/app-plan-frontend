import React from 'react';
import { connect } from 'react-redux'
import CollegeApplicationContainer from './containers/CollegeApplicationContainer'

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <CollegeApplicationContainer />
      </div>
    );
  }
}

export default App;
