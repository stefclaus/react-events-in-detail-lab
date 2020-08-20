// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {


//This component takes two props: onDelayedClick (a function), and delay (a number).

  handleClick = event => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
      return(
        <button
         onClick= {this.handleClick}>
         Button delay
        </button>
      )
  }


}
