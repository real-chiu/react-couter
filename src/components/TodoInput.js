import React, { Component } from 'react'
import { Input } from 'antd';

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
  
    this.onChange = this.onChange.bind(this);
    this.addTodoItemAndResetValue = this.addTodoItemAndResetValue.bind(this);
    this.state = {
      inputValue: ""
    }
  }
  
  onChange = (event) => {
    console.log("User input:" + event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  }

  addTodoItemAndResetValue = () => {
    this.props.addTodoItem(this.state.inputValue);
    this.setState({inputValue: ""});
  }

  render() {
    return (
      <Input 
        placeholder="Enter todo item" 
        size="large"
        value={this.state.inputValue}
        onChange={this.onChange}
        onPressEnter={this.addTodoItemAndResetValue}
      />
    )
  }
}
