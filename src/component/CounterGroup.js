import React, { Component } from 'react'
import { Input, Typography, Row, Col } from 'antd';

import Counter from './Counter';
import CounterApis from '../apis/CounterApis';
import { INIT_COUNTER_SIZE, INCREMENT, DECREMENT, INIT_SUM } from '../constant/constants';

const { Text } = Typography;

const textStyle = {
  fontSize: "20px"
}

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
      console.log(response);
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
    }, () => {
      CounterApis.setCounterSize(value).then((response) => {
        const size = response.data.size;
        console.log(size);
        this.setState({
          size
        });
      }).catch((error) => {
        console.log(error)
      })
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
        <Row gutter={16}>
          <Col>
            <Text style={textStyle} >Generate</Text>
          </Col>
          <Col>
            <Input type="text" value={this.state.size} onChange={this.handleValueChange} />
          </Col>
          <Col>
            <Text style={textStyle} >Counters</Text>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Text style={textStyle} >Sum is: <Text underline>{this.state.sum}</Text> </Text>
          </Col>
        </Row>
        {
          counters.map((value, index) => <Counter key={value} index={index} onCalculate={this.calculateSum} decrementSumWhenUnmounting={this.decrementSumWhenUnmounting} />)
        }
      </div>
    )
  }
}
