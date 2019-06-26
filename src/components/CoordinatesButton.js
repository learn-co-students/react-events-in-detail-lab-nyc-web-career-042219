// Code CoordinatesButton Component Here
import React from "react";

class CoordinatesButton extends React.Component{

  xyz = (event) =>{
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  render(){
    return <button onClick={this.xyz}></button>
  }
}

export default CoordinatesButton;
