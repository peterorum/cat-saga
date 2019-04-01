import { CAT_FETCH_SUCCEEDED } from 'Redux/actions/cat-actions';

const initialState = {
  url: '',
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAT_FETCH_SUCCEEDED: {
      const newState = {
        ...state,
        url: action.url,
      };

      return newState;
    }

    default:
      return state;
  }
};
