import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Row, Button, Space, List } from 'antd';
import './Sidebar.css';

const data1 = [
  {
    title: 'Senior Ruby on Rails engineer   $60/hr',
  },
  {
    title: 'Senior Product engineer   $45/hr',
  },
];

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar-content'>
        <Row gutter={16}>
          <Col className='col-width'>
            <Card bordered={false}>
              <Space direction='vertical' size={10}>
                <h5>Track time on Hubstaff</h5>
                Pay only for the hours wored
                <Button type='primary' block>
                  Sign Up
                </Button>
                <Button type='link' block>
                  Learn more...
                </Button>
              </Space>
            </Card>

            <Card title='TOP JOBS' className='bg-none' bordered={false}>
              <List
                itemLayout='horizontal'
                dataSource={data1}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href='index.html'>{item.title}</a>}
                      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    />
                  </List.Item>
                )}
              />
            </Card>

            <Card
              title='MOSTED VIEWED THIS WEEK'
              className='bg-none'
              bordered={false}
            >
              <List
                itemLayout='horizontal'
                dataSource={data1}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href='index.html'>{item.title}</a>}
                      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Sidebar;
