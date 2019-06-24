// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = event => {
        console.log(this.props.onReceiveCoordinates([event.clientX, event.clientY]))
    }

    render (){
        return (
            <button onClick={this.handleClick}>coordinate</button>
        )

    }
}

export default CoordinatesButton;
