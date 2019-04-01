export const CAT_FETCH_REQUESTED = 'CAT_FETCH_REQUESTED';
export const CAT_FETCH_SUCCEEDED = 'CAT_FETCH_SUCCEEDED';
export const CAT_FETCH_FAILED = 'CAT_FETCH_FAILED';

export const getCatUrl = () => ({
  type: CAT_FETCH_REQUESTED,
});
