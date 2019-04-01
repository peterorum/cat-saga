import { combineReducers } from 'redux';

import { catReducer } from './cat';

const reducers = combineReducers({
  cat: catReducer,
});

export default reducers;
