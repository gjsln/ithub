import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Radio, Row, Col } from 'antd';

class Availability extends Component {
  onChange = (e) => {
    const item = {
      key: 'job_type',
      filterText: e.target.value,
    };
    this.props.handleJobTypeFilter(item);
  };

  render() {
    return (
      <div>
        <Radio.Group
          style={{ width: '100%' }}
          onChange={this.onChange.bind(this)}
        >
          <Row>
            <Col span={24}>
              <Radio value={'hourly'}>Hourly </Radio>
            </Col>
            <Col span={24}>
              <Radio value={'part time'}>Part-time (20 hrs/wk)</Radio>
            </Col>
            <Col span={24}>
              <Radio value={'full time'}>Full-time (40 hrs/wk)</Radio>
            </Col>
          </Row>
        </Radio.Group>
      </div>
    );
  }
}

export default Availability;
