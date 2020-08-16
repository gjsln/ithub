import React, { Component } from 'react';
import './Filters.css';
import { Card, List } from 'antd';
import EditableTagGroup from './controls/EditableTagGroup';
import Availability from './controls/Availability';
import Location from './controls/Location';

class Filters extends Component {
  render() {
    return (
      <>
        <div className='filter-content'>
          <Card
            title='FILTERS'
            extra={<a href='all.html'>Clear all filters</a>}
            bordered={false}
            className='bg-none filter-head'
          >
            <List
              dataSource={[{ title: 'Skills' }]}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    title={item.title}
                    extra={<a href='all.html'>Clear</a>}
                    className='action-ctrls bg-none'
                  >
                    <EditableTagGroup />
                  </Card>
                </List.Item>
              )}
            />
            <List
              dataSource={[{ title: 'Availability' }]}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    title={item.title}
                    extra={<a href='all.html'>Clear</a>}
                    className='action-ctrls bg-none'
                  >
                    <Availability />
                  </Card>
                </List.Item>
              )}
            />
            <List
              dataSource={[{ title: 'Location' }]}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    title={item.title}
                    extra={<a href='all.html'>Clear</a>}
                    className='action-ctrls bg-none'
                  >
                    <Location />
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </div>
      </>
    );
  }
}

export default Filters;
