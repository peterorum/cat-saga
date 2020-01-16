import { createSelector } from 'reselect';

const getCat = state => state.cat;

export const makeCatUrlSelector = createSelector(
  [getCat],
  catState => catState.url,
);
