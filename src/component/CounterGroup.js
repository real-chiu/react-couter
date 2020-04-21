import React, { Component } from 'react'
import Counter from './Counter';

export default class CounterGroup extends Component {

  initArray = (size) => {
    return Array.from(Array(size).keys());
  }

  render() {
    let counters = this.initArray(100);
    return (
      <div>
        {
          counters.map((value) =><Counter key={value}/>)
        }
      </div>
    )
  }
}
