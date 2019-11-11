import { runSaga } from 'redux-saga';

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
      { type: 'cat/fetchSucceeded', url: 'http://a.cat' },
    ]);
  });
});
