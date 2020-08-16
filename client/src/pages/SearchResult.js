// import React, { useEffect, useState, Component } from 'react';
// import { isEmpty } from 'ramda';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchJobs, updateJobs } from '../../actions/jobsSearch';

// import { getJobs } from './Data/fetchSearchData';
// import jobs from './../../data/jobResult.json';
// import Filters from './../../components/Filters';
// import './jobsearch.css';

// class SearchResult extends Component {
//   constructor() {
//     super();
//     state = {
//       searchTerm: '',
//       jobData: '',
//     };
//   }
//   componentDidMount() {
//     const { fetchAllJobs } = this.props;
//     fetchAllJobs(result);
//   }

//   filterJobData = (SearchKey) => {
//     const { jobsResult, updateJobData } = this.props;
//     const filterData = jobsResult.filter((item) => {
//       return item.title.indexOf(SearchKey) !== -1 ? item : '';
//     });

//     updateJobData(filterData);
//   };
//   handleSearchText = (e) => {
//     this.setState({ searchTerm: e.target.value });
//   };

//   render() {
//     const { jobsResult, filteredJobsData } = this.props;
//     const jobsData = isEmpty(filteredJobsData) ? jobsResult : filteredJobsData;
//     return (
//       <div>
//         <Filters />
//         {jobsData.map((item, idx) => {
//           return (
//             <div key={idx}>
//               <div className={'content'}>
//                 <div>
//                   <span>{item.title} </span>
//                   <span>{item.salarymax} </span>
//                 </div>
//                 <div>
//                   <span>{item.desciption} </span>
//                 </div>
//               </div>
//             </div>
//           );
//         })}{' '}
//         Job Search
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   console.log('State => ', state);
//   return {
//     jobsResult: state.result,
//     filteredJobsData: state.filteredJobs,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   // return bindActionCreators(this.fetchJobs, dispatch);

//   return {
//     fetchAllJobs: (payload) => {
//       dispatch(fetchJobs(payload));
//     },
//     updateJobData: (payload) => {
//       dispatch(updateJobs(payload));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
