import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'

import { fetchCollegeApplications } from '../actions/fetchCollegeApplications'
import CollegeApplicationInput from '../components/CollegeApplicationInput'
import CollegeApplications from '../components/CollegeApplications'
import CollegeApplication from '../components/CollegeApplication'
import NavBar from '../components/NavBar'

class CollegeApplicationContainer extends React.Component {

    componentDidMount() {
        // pass through props to connect to store
        this.props.fetchCollegeApplications()
    }
    render () {
        return (
            <div>
                <NavBar /><br/>
                <Switch>
                    <Route path='/college_applications/new' component={CollegeApplicationInput}/>
                    <Route path='/college_applications/:id' render={(routerProps) => <CollegeApplication {...routerProps} college_applications={this.props.college_applications}/> } />
                    <Route path='/college_applications' render={(routerProps) => <CollegeApplications {...routerProps} college_applications={this.props.college_applications}/> } />
                </Switch>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        college_applications: state.college_applications
    }
}

export default connect(mapStateToProps, {fetchCollegeApplications})(CollegeApplicationContainer)