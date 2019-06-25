import React, { Component } from 'react';

export default class DelayedButton extends Component {

    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    }

    render() {
        return(
            <button onClick={this.handleClick}>XY</button>
        )
    }

}