import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import TodoApis from './apis/TodoApis';

import TodoInput from './components/TodoInput'
import TodoElemet from './components/TodoElement';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todoElements: []
    }
  }
  
  componentDidMount() {
    TodoApis.getTodoElemets().then((response) => {
      console.log(response.data);
      this.setState({
        todoElements: response.data
      })
    }).catch((error) => {
      console.log(error);
    })
  }
  render() {
    return (
      <Row>
        <Col span={8}/>
          <Col span={8}>
            {this.state.todoElements.map((todoElement) => <TodoElemet key={todoElement.id} info={todoElement}/>)}
          </Col>
        <Col span={8}/>
      </Row>
      
    )
  }
}
