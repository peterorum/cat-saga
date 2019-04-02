import { put, takeLatest } from 'redux-saga/effects';

import {
  CAT_FETCH_REQUESTED,
  CAT_FETCH_SUCCEEDED,
  CAT_FETCH_FAILED,
} from 'Redux/actions/cat-actions';

export function* fetchCat() {
  try {
    const response = yield fetch(
      'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png',
      {
        method: 'get',
        headers: {
          'x-api-key': process.env.cat_api,
        },
      },
    );

    const json = yield response.json();

    yield put({ type: CAT_FETCH_SUCCEEDED, url: json[0].url });
  } catch (e) {
    console.log('error', e);
    yield put({ type: CAT_FETCH_FAILED, message: e.message });
  }
}

function* catSaga() {
  yield takeLatest(CAT_FETCH_REQUESTED, fetchCat);
}

export default catSaga;
