import React from 'react';
import { Card, Col, Row, Select, Badge, Tag } from 'antd';
import './SearchResult.css';

const { Option } = Select;

const SearchResult = (props) => {
  if (!props.jobresult) {
    return <div className='article-preview'>Loading...</div>;
  }

  if (props.jobresult.length === 0) {
    return <div className='article-preview'>No Jobs are here... yet.</div>;
  }

  const handleInlineCalulation = (string) => {
    return new Function('return (' + string / 100 + ')')();
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
        {props.jobresult.map((item) => {
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
                    {handleInlineCalulation(item.salarymax)}
                    {' /hr'}
                  </strong>
                </Col>
              </Row>
              <div>
                <Row>
                  <Col span={16}>
                    {<a href='org.html'>Organizaton Name</a>}{' '}
                    <span className='location-txt'>{item.location}</span>
                    <br /> Reply Rate: <strong>xx%</strong>
                    <br /> Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s.
                    <div className='tag-txt'>
                      {item.requiredSkills.map((skills) => {
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
    </>
  );
};

export default SearchResult;
