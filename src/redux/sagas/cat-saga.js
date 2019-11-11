import { takeLatest } from 'redux-saga/effects';

export function* fetchCat(dispatch) {
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

    dispatch.cat.fetchSucceeded({ url: json[0].url });
  } catch (e) {
    dispatch.cat.fetchFailed({ message: e.message });
  }
}

function* catSaga(dispatch) {
  yield takeLatest('cat/fetchRequested', fetchCat, dispatch);
}

export default catSaga;
