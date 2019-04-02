import React from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { render, cleanup } from 'react-testing-library';

import 'jest-dom/extend-expect';

import App from 'Components/app/app';

import rootReducer from 'Redux/reducers';

const store = createStore(rootReducer);

afterEach(cleanup);

describe('<App />', () => {
  it('should render App', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    // look for header

    expect(getByText('Cats')).toBeInTheDocument();
  });
});
