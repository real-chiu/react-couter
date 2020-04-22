import React, { Component } from 'react'
import { INCREMENT, DECREMENT, INIT_COUNTER_VALUE } from '../constant/constants';

 class Counter extends Component {
  constructor(props) {
    super(props)
    
    this.onIncrementCounter = this.onIncrementCounter.bind(this);
    this.onDecrementCounter = this.onDecrementCounter.bind(this);
    this.state = {
       count: INIT_COUNTER_VALUE
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count < this.state.count) {
      this.props.onCalculate(INCREMENT);
    }
    if (prevState.count > this.state.count) {
      this.props.onCalculate(DECREMENT);
    }
  }

  componentWillUnmount() {
    this.props.decrementSumWhenUnmounting(this.state.count);
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