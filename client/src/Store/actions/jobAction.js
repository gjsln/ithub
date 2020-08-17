import axios from 'axios';

export const GET_JOBS = 'GET_JOBS';
export const UPDATE_JOBS = 'UPDATE_JOBS';

export const fetchJobs = () => (dispatch) => {
  return axios
    .get('/api/jobdescriptions/')
    .then((res) =>
      dispatch({
        type: GET_JOBS,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log('Could not fetch jobs. Try again later.');
    });
};

export const fetchQueryJobs = (payload) => (dispatch) => {
  let uri = `/api/jobdescriptions/search?${payload.key}=${payload.filterText}`;

  return axios
    .get(uri)
    .then((res) =>
      dispatch({
        type: UPDATE_JOBS,
        payload: res.data,
      })
    )
    .catch((err) => {
      console.log('Could not fetch jobs. Try again later.');
    });
};
