import React, { Component } from 'react'
import { Button, Space, Typography  } from 'antd';

import { INCREMENT, DECREMENT, INIT_COUNTER_VALUE } from '../constant/constants';

const { Text } = Typography;

const textStyle = {
  fontSize: "20px"
}

export default class Counter extends Component {
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
        <Space>
          <Button type="primary" onClick={this.onIncrementCounter}>+</Button>
          <Text style={textStyle} type="secondary">{this.state.count}</Text>
          <Button type="primary"  onClick={this.onDecrementCounter}>-</Button>
        </Space>
      </div>
    )
  }
}