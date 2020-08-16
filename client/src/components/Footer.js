import React from 'react';
import 'antd/dist/antd.css';
import './Footer.css';
import { Row, Col, List, Divider } from 'antd';

import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const listOne = ['How it works', "Why we're free", 'Agencies'];
const listTwo = ['About', 'Time Tracking', 'Developer', 'Resources'];
const listThree = [
  'Help Center',
  'Blog',
  'FAQ',
  'Email Us',
  'Terms',
  'Privacy',
];

const titlestyle = { color: '#fff', marginTop: '0' };
const listStyle = { border: '0' };

export default () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Row gutter={16}>
          <Col className='gutter-row' span={6}>
            <a href='index.html' className='footer-logo mb-0'>
              IT <strong>Hubstaff Talent</strong>
            </a>
          </Col>
          <Col className='gutter-row' span={5}>
            <Divider orientation='left' style={titlestyle}>
              TALENT
            </Divider>
            <List
              size='small'
              style={listStyle}
              dataSource={listOne}
              renderItem={(item) => (
                <List.Item>{<a href='index.html'>{item}</a>}</List.Item>
              )}
            />
          </Col>
          <Col className='gutter-row' span={5}>
            <Divider orientation='left' style={titlestyle}>
              HUBSTAFF
            </Divider>
            <List
              size='small'
              style={listStyle}
              dataSource={listTwo}
              renderItem={(item) => (
                <List.Item>{<a href='index.html'>{item}</a>}</List.Item>
              )}
            />
          </Col>
          <Col className='gutter-row' span={4}>
            <Divider orientation='left' style={titlestyle}>
              SUPPORT
            </Divider>
            <List
              size='small'
              style={listStyle}
              dataSource={listThree}
              renderItem={(item) => (
                <List.Item>{<a href='index.html'>{item}</a>}</List.Item>
              )}
            />
          </Col>
          <Col className='gutter-row' span={4}>
            <Divider orientation='left' style={titlestyle}>
              SOCIAL
            </Divider>

            <div className='icons-list'>
              <TwitterOutlined />
              <FacebookOutlined />
              <InstagramOutlined />
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};
