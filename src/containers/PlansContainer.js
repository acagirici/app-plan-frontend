import React from 'react'
import PlanInput from '../components/PlanInput'
import Plans from '../components/Plans'

class PlansContainer extends React.Component {

    render() {
        return (
            <div>
                <PlanInput college_application={this.props.college_application}/>
                <Plans plans={this.props.college_application && this.props.college_application.plans}/>
            </div>
        )
    }

}

export default PlansContainer