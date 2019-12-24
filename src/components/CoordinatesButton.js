  import React, {Component} from 'react';


  export default class CoordinatesButton extends Component{

    handleClick = (event) => {
      let mouseCoordinates = []
      let mouseY = event.clientX
      let mouseX = event.clientY
      mouseCoordinates.push(mouseY, mouseX)
      this.props.onReceiveCoordinates(mouseCoordinates)
    }

    render() {
      return(
        <button onClick={this.handleClick}>button</button>
      )
    }
  }
