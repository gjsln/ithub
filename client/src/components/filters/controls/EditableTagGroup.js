import React, { Component } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

const listItems = [
  'react',
  'npm',
  'webpack',
  'html',
  'js',
  'css',
  'java',
  'spring',
  'kafka',
  'nginx',
  'scala',
  'hadoop',
  'spark',
  'oracle',
  'mysql',
  'program management',
];

const children = [];

listItems.forEach((item) => {
  children.push(<Option key={item}>{item}</Option>);
});

class EditableTagGroup extends Component {
  handleChange = (e) => {
    console.log(`checked = ${e}`);
  };
  render() {
    return (
      <>
        <Select
          mode='tags'
          style={{ width: 261 }}
          placeholder='Select skills'
          onChange={this.handleChange.bind(this)}
        >
          {children}
        </Select>
      </>
    );
  }
}

export default EditableTagGroup;
