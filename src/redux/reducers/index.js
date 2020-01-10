import { combineReducers } from 'redux';

import { catReducer } from './cat-reducer';

const reducers = combineReducers({
  cat: catReducer,
});

export default reducers;
