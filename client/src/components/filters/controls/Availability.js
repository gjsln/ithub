import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Checkbox, Row, Col } from 'antd';

class Availability extends Component {
  onChange = (e) => {
    console.log(`checked = ${e}`);
  };

  render() {
    return (
      <div>
        <Checkbox.Group
          style={{ width: '100%' }}
          onChange={this.onChange.bind(this)}
        >
          <Row>
            <Col span={24}>
              <Checkbox value='hourly'>Hourly </Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='partTime'>Part-time (20 hrs/wk)</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox value='fullTime'>Full-time (40 hrs/wk)</Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </div>
    );
  }
}

export default Availability;
