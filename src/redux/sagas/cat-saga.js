import { put, takeLatest } from 'redux-saga/effects';

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

    yield put({ type: 'cat/fetchSucceeded', payload: { url: json[0].url } });
  } catch (e) {
    yield put({ type: 'cat/fetchFailed', payload: { message: e.message } });
  }
}

function* catSaga() {
  yield takeLatest('cat/fetchRequested', fetchCat);
}

export default catSaga;
