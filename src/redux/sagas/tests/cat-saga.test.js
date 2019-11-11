import { runSaga } from 'redux-saga';

import { fetchCat } from '../cat-saga';

describe('cat saga', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return url', async () => {
    const dispatch = { cat: { fetchSucceeded: jest.fn() } };

    fetch.mockResponseOnce(JSON.stringify([{ url: 'http://a.cat' }]));

    await runSaga({}, fetchCat, dispatch).toPromise();

    expect(dispatch.cat.fetchSucceeded).toHaveBeenCalled();
  });
});
