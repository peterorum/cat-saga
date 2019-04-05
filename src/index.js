import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'Redux/reducers';
import catSaga from 'Redux/sagas/cat-saga';

import App from './components/app/app';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

/* eslint-enable */

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

if (module.hot) {
  module.hot.accept('Redux/reducers', () => {
    store.replaceReducer(rootReducer);
  });
}

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

if (module.hot) {
  module.hot.accept('./components/app/app', () => {
    render();
  });
}
