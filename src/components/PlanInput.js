import React from 'react'
import {connect} from 'react-redux'
import {addPlan} from '../actions/addPlan'
import '../style.css'

class PlansInput extends React.Component {

    state = {
        college_name: '', 
        app_deadline: '', 
        app_fee: '',
        visit_date: '',
        visit_impressions: '',
        essay_topic: '',
        rating: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPlan(this.state, this.props.college_application.id)
        this.setState({
            college_name: '', 
            app_deadline: '', 
            app_fee: '',
            visit_date: '',
            visit_impressions: '',
            essay_topic: '',
            rating: ''
        })
    }

    render() {
        return (
            <div id='container'>
                <form onSubmit={this.handleSubmit}><br/>
                    <label>Institution Name: </label>
                    <input type='text' placeholder='Name' name='college_name' value={this.state.college_name} onChange={this.handleChange}/><br/>
                    <label>Application Deadline: </label>
                    <input type='date' name='app_deadline' value={this.state.app_deadline} onChange={this.handleChange}/><br/>
                    <label>Application Fee: </label>
                    <input type='number' step="0.01" name='app_fee' value={this.state.app_fee} onChange={this.handleChange}/><br/>
                    <label>Planned Visit Date: </label>
                    <input type='date' name='visit_date' value={this.state.visit_date} onChange={this.handleChange}/><br/>
                    <label>Visit Impressions: </label>
                    <textarea rows="8" cols="80" placeholder='type in your impressions of visit or questions to ask' name='visit_impressions' value={this.state.visit_impressions} onChange={this.handleChange}/><br/>
                    <label>Essay Topics: </label>
                    <textarea rows="8" cols="80" placeholder='type in essay topics for institution' name='essay_topic' value={this.state.essay_topic} onChange={this.handleChange}/><br/>
                    <label>Rating Score: </label>
                    <input type='number' step="0.01" name='rating' value={this.state.rating} onChange={this.handleChange}/><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default connect(null, {addPlan})(PlansInput)