import React, { Component } from 'react';

export default class CoordinatesButton extends React.Component {

    getCoordinates(e) {
        let arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render() {
        return(
            <button onClick={(e)=>this.getCoordinates(e)}/>
        )
    }
}