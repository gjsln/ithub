import React from 'react';
import './SearchBox.css';
import { Input, Card } from 'antd';

const { Search } = Input;

function SearchBox(props) {
  return (
    <>
      <Card bordered={false} className='bg-none'>
        <Search
          placeholder='Search by keywords (PHP, .NET, graphic design etc.)'
          enterButton='Search'
          size='large'
          onSearch={(value) => props.handleSearch(value)}
          enterButton
        />
      </Card>
    </>
  );
}
export default SearchBox;
