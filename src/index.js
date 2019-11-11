import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import { init } from '@rematch/core';
import immer from '@rematch/immer';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

// models
import cat from 'Redux/models/cat-model';

// sagas
import catSaga from 'Redux/sagas/cat-saga';

import App from './components/app/app';

import './styles/styles.css';

const sagaMiddleware = createSagaMiddleware();

const store = init({
  models: {
    cat,
  },
  redux: {
    middlewares: [sagaMiddleware],
  },
  plugins: [immer()],
});

sagaMiddleware.run(catSaga);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
