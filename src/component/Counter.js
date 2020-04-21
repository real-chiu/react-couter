import React, { Component } from 'react'

 class Counter extends Component {
  constructor(props) {
    super(props)
    
    this.onIncrementCounter = this.onIncrementCounter.bind(this);
    this.onDecrementCounter = this.onDecrementCounter.bind(this);
    this.state = {
       count: 0
    }
  }

  onIncrementCounter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  onDecrementCounter = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }
  
  
  render() {
    return (
      <div>
        <span>{this.props.index}</span>
        <button onClick={this.onIncrementCounter}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.onDecrementCounter}>-</button>
      </div>
    )
  }
}

export default Counter;