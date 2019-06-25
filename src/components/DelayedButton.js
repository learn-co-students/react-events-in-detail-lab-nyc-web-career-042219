// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    handleDClick = (event) => {
        event.persist()
        setTimeout(()=> {
            this.props.onDelayedClick(event)
        }, this.props.delay)
        
    }

    render() {
        return(
            <button onClick={this.handleDClick}>Delayed</button>
        )

    }
}
export default DelayedButton