import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import { Provider } from 'react-redux';
import { configureStore } from 'redux';

import rootReducer from 'Redux/reducers';

import App from './components/app/app';

import './styles/styles.css';

const store = configureStore({ reducer: rootReducer });

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
