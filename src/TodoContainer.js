import React, { Component } from 'react'
import { Row, Col, Divider } from 'antd';
import TodoApis from './apis/TodoApis';

import TodoInput from './components/TodoInput'
import TodoElemet from './components/TodoElement';

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
    
    this.addTodoItem = this.addTodoItem.bind(this);
    this.deleteTodoElement = this.deleteTodoElement.bind(this);

    this.state = {
       todoElements: []
    }
  }
  
  addTodoItem = (inputValue) => {
    const requestBody = {
      content: inputValue
    }
    TodoApis.addTodoElements(requestBody).then((response) => {
      let newTodoElements = [];
      newTodoElements.push(...this.state.todoElements, response.data);
      this.setState({
        todoElements: newTodoElements
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  deleteTodoElement = (id) => {
    console.log("deleted");
    let filteredTodoItems = this.state.todoElements.filter((todoElement) => todoElement.id !== id);
    this.setState({
      todoElements: filteredTodoItems
    });
  }

  componentDidMount() {
    TodoApis.getTodoElements().then((response) => {
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
            {this.state.todoElements.map((todoElement) => <TodoElemet key={todoElement.id} info={todoElement} deleteTodoElement={this.deleteTodoElement}/>)}
            <Divider orientation="center" style={{ color: '#333', fontWeight: 'normal' }}/>
            <TodoInput addTodoItem={this.addTodoItem}/>
          </Col>
        <Col span={8}/>
      </Row>
      
    )
  }
}
