import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, designation } = this.props
        // const { state1, state2 } = this.state
        return (
            // <h1>Welcome {this.props.name} is a {this.props.designation}</h1>
            <h1>Welcome {name} is a {designation}</h1>
        )
    }
}

export default Welcome