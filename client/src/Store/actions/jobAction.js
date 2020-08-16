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

export function updateJobs(updatepayload) {
  return { type: UPDATE_JOBS, updatepayload };
}
