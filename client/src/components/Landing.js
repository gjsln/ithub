import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Col, Row } from 'antd';
import Sidebar from './sidebar/Sidebar';
import SearchBox from './search/SearchBox';
import Filters from './filters/Filters';
import { fetchJobs, updateJobs } from '../Store/actions/jobAction';
import SearchResult from '../pages/SearchResult';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  filterJobData = (SearchKey) => {
    const { jobslist, updateJobData } = this.props;
    const filterData = jobslist.filter((item) => {
      return item.title.indexOf(SearchKey) !== -1 ? item : '';
    });
    updateJobData(filterData);
  };

  handleSearchText = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className='landing container p-4'>
        <Row gutter={16}>
          <Col className='gutter-row search-box-container' span={24}>
            <SearchBox handleSearch={this.filterJobData} />
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className='gutter-row' span={6}>
            <Filters />
          </Col>
          <Col className='gutter-row' span={12}>
            <SearchResult jobresult={this.props.jobslist} />
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
  };
};

export default connect(mapStateToProps, { fetchJobs })(Landing);
