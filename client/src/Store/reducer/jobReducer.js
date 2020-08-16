import { GET_JOBS, UPDATE_JOBS } from '../actions/jobAction';

const initialState = {
  jobs: [],
  filteredJobs: [],
};

function jobReducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case UPDATE_JOBS:
      const { updatepayload } = action;
      return Object.assign({}, state, {
        filteredJobs: updatepayload,
      });

    default:
      return state;
  }
}
export default jobReducer;
