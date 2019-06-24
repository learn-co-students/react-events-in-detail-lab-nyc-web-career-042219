import React, { Component } from 'react';

class CoordinatesButton extends Component {
  getCoordinates = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  }

  render() {
    return (
      <button onClick={this.getCoordinates}></button>
    )
  }
}

export default CoordinatesButton
