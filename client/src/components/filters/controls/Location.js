import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class Location extends Component {
  handleChange = (value) => {
    const item = {
      key: 'location',
      filterText: value,
    };
    this.props.handleLocationFilter(item);
  };
  render() {
    return (
      <>
        <Select
          style={{ width: 261 }}
          placeholder='Select a Location'
          onChange={this.handleChange.bind(this)}
        >
          <Option value='singapore'>Singapore</Option>
          <Option value='chennai'>Chennai</Option>
          <Option value='banglaore'>Bangalore</Option>
          <Option value='california'>California</Option>
          <Option value='philipines'>Philipines</Option>
          <Option value='newyork'>New York</Option>
          <Option value='taxas'>Taxas</Option>
          <Option value='dallas'>Dallas</Option>
          <Option value='hyderabad'>Hyderabad</Option>
        </Select>
      </>
    );
  }
}

export default Location;
