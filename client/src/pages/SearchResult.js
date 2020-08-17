import React, { useState } from 'react';
import { Card, Col, Row, Select, Badge, Tag, Pagination } from 'antd';
import './SearchResult.css';

const { Option } = Select;

const SearchResult = (props) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  if (!props.jobresult) {
    return (
      <div className='article-preview'>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (props.jobresult.length === 0) {
    return (
      <div className='article-preview'>
        <h3>No Jobs Available here...</h3>
      </div>
    );
  }

  const handleCalculation = (string) => {
    return new Function('return (' + string / 100 + ')')();
  };

  const handlePaginationChange = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(5);
    } else {
      setMinValue(maxValue);
      setMaxValue(value * 5);
    }
  };

  return (
    <>
      <Card bordered={false}>
        <Row style={{ alignItems: 'center' }}>
          <Col span={8}>
            <strong>RESULT ({props.jobresult.length})</strong>
          </Col>
          <Col span={10} offset={6}>
            Sort By:
            <Select
              style={{ width: 150, paddingLeft: 5 }}
              placeholder='Relevance'
            >
              <Option value='ascending'>Ascending Order</Option>
              <Option value='descending'>Descending Order</Option>
              <Option value='latest'>Latest</Option>
              <Option value='oldest'>Oldest</Option>
            </Select>
          </Col>
        </Row>
        {props.jobresult.length > 0 &&
          props.jobresult.slice(minValue, maxValue).map((item) => {
            return (
              <div key={item.id} className='list-item'>
                <Row>
                  <Col span={16}>
                    <strong>{item.title}</strong>
                    {item.jobType === 'Full Time' ? (
                      <Badge
                        className='site-badge'
                        count={item.jobType}
                        style={{ backgroundColor: '#4bd3ff' }}
                      />
                    ) : item.jobType === 'Part Time' ? (
                      <Badge
                        className='site-badge'
                        count={item.jobType}
                        style={{ backgroundColor: '#ffc22b' }}
                      />
                    ) : (
                      <Badge
                        className='site-badge'
                        count={item.jobType}
                        style={{ backgroundColor: '#52c41a' }}
                      />
                    )}
                  </Col>
                  <Col span={4} offset={4} style={{ textAlign: 'right' }}>
                    <strong>
                      {'$'}
                      {handleCalculation(item.salarymax)}
                      {' /hr'}
                    </strong>
                  </Col>
                </Row>
                <div>
                  <Row>
                    <Col span={16}>
                      {<a href='org.html'>Epic Coders</a>}{' '}
                      <span className='location-txt'>{item.location}</span>
                      <br /> Reply Rate: <strong>xx%</strong>
                      <br /> Lorem Ipsum has been the industry's standard dummy
                      text ever since the 1500s.
                      <div className='tag-txt'>
                        {item.requiredSkills.split(',').map((skills) => {
                          return (
                            <Tag color='default' className='tag-badge'>
                              {skills}
                            </Tag>
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            );
          })}
      </Card>
      <Pagination
        className='pagination-content'
        defaultCurrent={1}
        defaultPageSize={5}
        onChange={handlePaginationChange}
        total={props.jobresult.length}
      />
    </>
  );
};

export default SearchResult;
