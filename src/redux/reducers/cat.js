import { SET_CAT_URL } from 'Redux/actions/cat';

const initialState = {
  url: '',
};

export const catReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAT_URL: {
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
