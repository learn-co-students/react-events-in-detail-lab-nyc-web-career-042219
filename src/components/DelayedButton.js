import React from 'react'

class DelayedButton extends React.Component{
	foo = (event) => {
		event.persist()
		return setTimeout( ()=>{
			this.props.onDelayedClick(event)
		}, this.props.delay)
	}
	render(){
		return (
			<button onClick={(e) => this.foo(e)}></button>
		)
	}
}

export default DelayedButton;

//	<div>{this.props.onReceiveCoordinates}</div>
