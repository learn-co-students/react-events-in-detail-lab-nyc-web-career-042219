import React, { Component } from 'react'

class DelayedButton extends Component {

  dealWithClick = (event) => {
    event.persist()
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  }

  render() {
    return <button
      onClick={this.dealWithClick}
    >Clicky Wicky</button>
  }
}

export default DelayedButton
