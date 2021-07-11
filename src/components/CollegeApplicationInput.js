import React from 'react'
import {addCollegeApplication} from '../actions/addCollegeApplication'
import { connect } from 'react-redux'

class CollegeApplicationInput extends React.Component {

    state = {name: '', 
    app_type: '', 
    level: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addCollegeApplication(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Application Name: </label>
                    <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Application Type: </label>
                    <select name="app_type" placeholder='Select Application Type' value={this.state.app_type} onChange={this.handleChange}>
                        <option value="first-year">First-Year</option>
                        <option value="transfer">Transfer</option>
                    </select><br/>
                    <label>Application Level: </label>
                    <select name="level" placeholder='Select Application Type' value={this.state.level} onChange={this.handleChange}>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate</option>
                        <option value="community">Community College</option>
                        <option value="vocational">Vocational</option>
                    </select><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, {addCollegeApplication})(CollegeApplicationInput)