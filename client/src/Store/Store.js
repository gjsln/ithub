import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobReducer from './reducer/jobReducer';

const initialState = {};

const middleWare = [thunk];

const Store = createStore(
  jobReducer,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;
