import { produce } from 'immer';

/* eslint-disable no-param-reassign */

import { CAT_FETCH_SUCCEEDED } from 'Redux/actions/cat-actions';

const initialState = {
  url: '',
};

export const catReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CAT_FETCH_SUCCEEDED:
        draft.url = action.url;
        break;

      default:
        break;
    }
  });
