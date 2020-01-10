import { runSaga } from 'redux-saga';

import { CAT_FETCH_SUCCEEDED } from 'Redux/actions/cat-actions';
import { fetchCat } from '../cat-saga';

describe('cat saga', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return url', async () => {
    const dispatched = [];

    fetch.mockResponseOnce(JSON.stringify([{ url: 'http://a.cat' }]));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({}),
      },
      fetchCat,
    ).toPromise();

    expect(dispatched).toEqual([
      { type: CAT_FETCH_SUCCEEDED, url: 'http://a.cat' },
    ]);
  });
});
