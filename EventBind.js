import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* Performance issues in big app, binding alwasy when render */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                {/* Performance issues in big app */}
                <button onClick={this.clickHandler}>Click</button>
                {/* Official React Docs, mostly used 
                Becasue binding happend once in constructor */}
            </div>
        )
    }
}

export default EventBind
