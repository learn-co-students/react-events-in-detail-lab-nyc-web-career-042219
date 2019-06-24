import React from 'react'

class CoordinatesButton extends React.Component{
	coords = (event) => {

		let arr = [event.clientX, event.clientY]
		return this.props.onReceiveCoordinates(arr)
	}
	render(){
		return (
			<button onClick={(e) => this.coords(e)}></button>
		)
	}
}

export default CoordinatesButton;

//	<div>{this.props.onReceiveCoordinates}</div>
