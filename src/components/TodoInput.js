import React, { Component } from 'react'
import { Input } from 'antd';

export default class TodoInput extends Component {
  render() {
    return (
      <Input placeholder="Enter todo item" size="large"/>
    )
  }
}
