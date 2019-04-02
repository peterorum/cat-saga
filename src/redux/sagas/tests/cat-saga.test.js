import { put } from 'redux-saga/effects';

import { CAT_FETCH_SUCCEEDED } from 'Redux/actions/cat-actions';
import { fetchCat } from '../cat-saga';

describe('cat saga', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return url', () => {
    const mockResponse = { json: () => [{ url: 'http://a.cat' }] };

    const gen = fetchCat();

    gen.next();

    const result = gen.next(mockResponse).value;

    expect(result).toEqual(mockResponse.json());

    const final = gen.next(mockResponse.json()).value;

    expect(final).toEqual(
      put({ type: CAT_FETCH_SUCCEEDED, url: 'http://a.cat' }),
    );
  });
});
