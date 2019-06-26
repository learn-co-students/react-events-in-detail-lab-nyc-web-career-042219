// Code CoordinatesButton Component Here
// CoordinatesButton
// In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
//
// This component takes in one prop: onReceiveCoordinates. This prop is a function passed down from index.js. This function is currently just logging whatever is passed into it.
//
// Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.
//
// Pass this event data in as the argument for the onReceiveCoordinates prop.
//
// If successful, the current x,y position of your mouse should be logged.

import React from 'react'


export default class CoordinatesButton extends React.Component{

  handleClick = (event) => {
    let arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
  }


  render(){
    return (
      <button onClick={this.handleClick}>
        Button
      </button>

    )
  }
}
