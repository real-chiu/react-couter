import React, { Component } from 'react'
import Counter from './Counter';
import { INIT_COUNTER_SIZE } from '../constant/constants';

export default class CounterGroup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      size: INIT_COUNTER_SIZE,
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
        <form>
          <input type="text"  value={this.state.size} onChange={this.handleValueChange}/>
        </form>
        {
          counters.map((value) =><Counter key={value}/>)
        }
      </div>
    )
  }
}
