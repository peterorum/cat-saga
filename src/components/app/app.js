import React from 'react';

import 'sanitize.css';

import { Header } from 'Components/header/header';
import { Footer } from 'Components/footer/footer';

import { GlobalStyle } from 'Styles/global-styles';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <div>Content</div>
    <Footer />
  </>
);

export default App;
