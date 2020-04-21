import React, { Component } from 'react'
import Counter from './Counter';
import { INIT_COUNTER_SIZE, INCREMENT, DECREMENT } from '../constant/constants';

export default class CounterGroup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      size: INIT_COUNTER_SIZE,
      sum: 0
    }
  }

  calculateSum = (action) => {
    switch (action) {
      case INCREMENT:
        this.setState((prevState) => {
          return {
            sum: prevState.sum + 1
          }
        });
        break;
      case DECREMENT:
        this.setState((prevState) => {
          return {
            sum: prevState.sum - 1
          }
        });
        break;
      default:
    }
  }
  
  handleValueChange = (event) => {
    const value = event.target.value
    this.setState({
      size: value.length > 0 ? parseInt(value) : 0,
    });
  }

  initArray = (size) => {
    return Array.from(Array(size).keys());
  }

  render() {
    let counters = this.initArray(this.state.size);
    return (
      <div>
        <div>
          <div>Generate</div>
          <form>
            <input type="text" value={this.state.size} onChange={this.handleValueChange} />
          </form>
          <div>Counters</div>
          <div>Sum is: {this.state.sum}</div>
        </div>

        {
          counters.map((value, index) => <Counter key={value} index={index} />)
        }
      </div>
    )
  }
}
