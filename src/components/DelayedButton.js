  import React, {Component} from 'react';

  export default class DelayedButton extends Component {

    delayClick = (event) => {
      event.persist()
      // console.log(event)
      // this.props.delay = setTimeout(onDelayedClick(event), 2000 )
      // this.props.onDelayedClick(event.target)
      return setTimeout(() => {
        this.props.onDelayedClick(event)
      }, this.props.delay)

    }

    render() {
      console.log(this.props.delay)
      return(
        <button onClick={this.delayClick}> click </button>
      )
    }
  }
