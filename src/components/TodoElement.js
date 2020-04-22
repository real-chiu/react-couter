import React, { Component } from 'react'
import { Card, Typography, Button, Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
const { Text } = Typography;

const cardStyle = {
  marginTop: "10px"
}
export default class TodoElement extends Component {
  constructor(props) {
    super(props)

    this.state = {
      status: props.status
    }
  }

  render() {
    return (
      <Card style={cardStyle} hoverable size="small">
        <Row justify="space-between">
          <Col>
            <Text>
              {this.props.info.content}
            </Text>
          </Col>
          <Col>
            <Button shape="circle" size="small" icon={<CloseOutlined />} />
          </Col>
        </Row>
      </Card>
    )
  }
}
