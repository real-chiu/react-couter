import React, { Component } from 'react'
import Counter from './Counter';
import CounterApis from '../apis/CounterApis';
import { INIT_COUNTER_SIZE, INCREMENT, DECREMENT, INIT_SUM } from '../constant/constants';
import Axios from 'axios';

export default class CounterGroup extends Component {
  constructor(props) {
    super(props)

    this.calculateSum = this.calculateSum.bind(this);

    this.state = {
      size: INIT_COUNTER_SIZE,
      sum: INIT_SUM,
    }
  }

  componentDidMount() {
    CounterApis.getCounterSize().then((response) => {
      let size = response.data.size;
      this.setState({size});
    }).catch((error) => {
      console.log(error)
    })
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

  decrementSumWhenUnmounting = (count) => {
    this.setState((prevState) => {
      return {
        sum: prevState.sum - count
      }
    })
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
          counters.map((value, index) => <Counter key={value} index={index} onCalculate={this.calculateSum} decrementSumWhenUnmounting={this.decrementSumWhenUnmounting} />)
        }
      </div>
    )
  }
}
