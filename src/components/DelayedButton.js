import React, { Component } from 'react';

export default class DelayedButton extends React.Component {

    delayThat = (e) => {
        e.persist()
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render() {
        return(
            <button onClick={(e) => this.delayThat(e)}/>
        )
    }
}