import React from 'react';

import { render, cleanup } from 'react-testing-library';

import 'jest-dom/extend-expect';

import App from 'Components/app/app';

afterEach(cleanup);

describe('<App />', () => {
  it('should render App', () => {
    const { getByText } = render(<App />);

    expect(getByText('Header')).toBeInTheDocument();
  });
});
