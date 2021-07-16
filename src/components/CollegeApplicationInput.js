import React from 'react'
import {addCollegeApplication} from '../actions/addCollegeApplication'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import '../style.css'

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
        this.setState({
            name: '', 
            app_type: '', 
            level: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Application Name: </label>
                    <input type='text' placeholder='Name' name='name' value={this.state.name} onChange={this.handleChange}/><br/>
                    <label>Application Type: </label>
                    <select name="app_type" placeholder='Select Application Type' value={this.state.app_type} onChange={this.handleChange}>
                        <option defaultValue="First-Year">First-Year</option>
                        <option value="Transfer">Transfer</option>
                    </select><br/>
                    <label>Application Level: </label>
                    <select name="level" placeholder='Select Application Type' value={this.state.level} onChange={this.handleChange}>
                        <option defaultValue="Undergraduate">Undergraduate</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Community College">Community College</option>
                        <option value="Vocational">Vocational</option>
                    </select><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, {addCollegeApplication})(CollegeApplicationInput)