import React from 'react'
import { connect } from 'react-redux'

import { fetchCollegeApplications } from '../actions/fetchCollegeApplications'
import CollegeApplicationInput from '../components/CollegeApplicationInput'
import CollegeApplications from '../components/CollegeApplications'

class CollegeApplicationContainer extends React.Component {

    componentDidMount() {
        // pass through props to connect to store
        this.props.fetchCollegeApplications()
    }
    render () {

        return (
            <div>
                <CollegeApplicationInput/>
                <CollegeApplications college_applications={this.props.college_applications}/>
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