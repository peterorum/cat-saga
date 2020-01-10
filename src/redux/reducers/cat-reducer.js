import { createAction } from '@reduxjs/toolkit';

const catFetchSucceeded = createAction('CAT_FETCH_SUCCEEDED');

const initialState = {
  url: '',
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case catFetchSucceeded.type:
      state.url = action.url;
      return state;

    default:
      return state;
  }
};
