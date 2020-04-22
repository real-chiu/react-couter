import React, { Component } from 'react'
import { Card, Typography } from 'antd';

const { Text } = Typography;

const cardStyle = {
  marginTop: "10px"
}
export default class TodoElement extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <Card style={cardStyle} hoverable size="small">
        <Text>
          {this.props.info.content}
        </Text>
      </Card>
    )
  }
}
