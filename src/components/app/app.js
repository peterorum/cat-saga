import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { GlobalStyle } from 'Styles/global-styles';

import { AppBar } from 'Components/app-bar/app-bar';
import Main from 'Components/main/main';
import About from 'Components/about/about';
import { Footer } from 'Components/footer/footer';
import PageChange from 'Components/page-change/page-change';

export const App = () => (
  <>
    <GlobalStyle />
    <div>
      <Router>
        <PageChange>
          <AppBar />
          <Route path="/" exact component={Main} />
          <Route path="/about" exact component={About} />
        </PageChange>
        <Footer />
      </Router>
    </div>
  </>
);

export default App;
