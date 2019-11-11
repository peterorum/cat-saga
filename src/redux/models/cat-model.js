export default {
  state: { url: '' },
  reducers: {
    fetchRequested: state => state,

    fetchSucceeded: (state, payload) => {
      // using immer, so can modify directly
      state.url = payload.url;

      return state;
    },

    fetchFailed: (state, payload) => {
      console.error('fetch failed', payload.message); // eslint-disable-line no-console

      return state;
    },
  },
};
