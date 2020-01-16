import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: '',
};

const catSlice = createSlice({
  name: 'cat',
  initialState,
  reducers: {
    catFetchSucceeded: (state, action) => {
      state.url = action.payload.url;
    },
  },
});

export const { catFetchSucceeded } = catSlice.actions;

export default catSlice.reducer;

// async

const fetchCatUrl = async () => {
  try {
    const response = await fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png',
      {
        method: 'get',
        headers: {
          'x-api-key': process.env.cat_api,
        },
      },
    );

    const json = await response.json();

    const { url } = json[0];

    return { url };
  } catch (e) {
    throw e.message;
  }
};

// call this in application
export const getCatUrl = () => async dispatch => {
  try {
    const data = await fetchCatUrl();
    dispatch(catFetchSucceeded(data));
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
  }
};
