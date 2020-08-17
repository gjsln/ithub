import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import Sidebar from './sidebar/Sidebar';
import SearchBox from './search/SearchBox';
import Filters from './filters/Filters';
import { fetchJobs, fetchQueryJobs } from '../Store/actions/jobAction';
import SearchResult from '../pages/SearchResult';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  handleSearchQuery = (value) => {
    const item = {
      key: 'query',
      filterText: value,
    };
    this.props.fetchQueryJobs(item);
  };

  handleFilterSearch = (value) => {
    this.props.fetchQueryJobs(value);
  };

  render() {
    const { jobslist, updateJobList } = this.props;
    const jobsData = updateJobList || jobslist;

    return (
      <div className='landing container p-4'>
        <Row gutter={16}>
          <Col className='gutter-row search-box-container' span={24}>
            <SearchBox handleSearch={this.handleSearchQuery} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className='gutter-row' span={6}>
            <Filters handleFilter={this.handleFilterSearch} />
          </Col>
          <Col className='gutter-row' span={12}>
            <SearchResult jobresult={jobsData} />
          </Col>
          <Col className='gutter-row' span={6}>
            <Sidebar />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobslist: state.jobs,
    updateJobList: state.filterList,
  };
};

export default connect(mapStateToProps, { fetchJobs, fetchQueryJobs })(Landing);
