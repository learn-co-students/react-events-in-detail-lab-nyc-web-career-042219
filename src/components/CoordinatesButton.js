// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    

    

    render(){
        console.log(this.props)
        return <button onClick={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}/>
        
    }
} 