// Code DelayedButton Component Here
import React from "react";

class DelayedButton extends React.Component{

  ccc=(event)=>{
    event.persist();
    return setTimeout(()=>{this.props.onDelayedClick(event)},this.props.delay)
  }

  render(){
    return <button onClick={this.ccc}></button>
  }
}

export default DelayedButton;
