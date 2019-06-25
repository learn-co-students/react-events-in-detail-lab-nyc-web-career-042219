import React, { Component } from 'react'

class CoordinatesButton extends Component {

    dealWithClick = (event) => {
      this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
      return <button
        onClick={this.dealWithClick}
      >Clickery Doo</button>
    }
}

export default CoordinatesButton
