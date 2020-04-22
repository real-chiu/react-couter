import React, { Component } from 'react'
import { Card, Typography, Button, Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import TodoApis from '../apis/TodoApis';

const { Text } = Typography;

const cardStyle = {
  marginTop: "10px"
}

export default class TodoElement extends Component {
  constructor(props) {
    super(props)

    this.changeStatus = this.changeStatus.bind(this);

    this.state = {
      status: props.info.status
    }
  }

  changeStatus = () => {
    let requestBody = {
      status: !this.state.status
    }
    TodoApis.updateTodoElement(this.props.info.id, requestBody).then((response) => {
      this.setState((prevState) => {
        return {
          status: response.data.status
        }
      })
    }).catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <Card style={cardStyle} hoverable size="small">
        <Row justify="space-between">
          <Col onClick={this.changeStatus}>
            <Text delete={this.state.status}>
              {this.props.info.content}
            </Text>
          </Col>
          <Col>
            <Button onClick={() => this.props.deleteTodoElement(this.props.info.id)} shape="circle" size="small" icon={<CloseOutlined />} />
          </Col>
        </Row>
      </Card>
    )
  }
}
