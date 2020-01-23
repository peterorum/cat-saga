import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from 'Redux/reducers';

import { ThemeProvider } from 'styled-components';

import App from './components/app/app';

import 'sanitize.css/sanitize.css';

import 'typeface-open-sans';

import { theme } from './styles/theme';

const store = configureStore({ reducer: rootReducer });

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
  );
};

render();
