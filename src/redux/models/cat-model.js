export default {
  state: { url: '' },
  reducers: {
    fetchRequested: state => state,

    fetchSucceeded: (state, payload) => {
      state.url = payload.url;

      return state;
    },

    fetchFailed: (state, payload) => {
      console.error('fetch failed', payload.message);

      return state;
    },
  },
};
