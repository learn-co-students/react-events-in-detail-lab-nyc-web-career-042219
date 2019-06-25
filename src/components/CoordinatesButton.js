import React, { Component } from 'react';

class CoordinatesButton extends Component {

    handleClick = (event) => {
        let array = [event.screenX, event.screenY]
        this.props.onReceiveCoordinates(array)
    }

    render() {
        return (
          <button onClick={this.handleClick}>
              Coordinate Button
          </button>
        )
      }

    }

    export default CoordinatesButton;