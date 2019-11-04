import React from 'react';

import { GlobalStyle } from 'Styles/global-styles';

import { AppBar } from 'Components/app-bar/app-bar';
import Main from 'Components/main/main';
import { Footer } from 'Components/footer/footer';

export const App = () => (
  <>
    <GlobalStyle />
    <div>
      <AppBar />
      <Main />
      <Footer />
    </div>
  </>
);

export default App;
