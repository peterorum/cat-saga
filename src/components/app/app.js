import React from 'react';

import { Box, Grommet } from 'grommet';

import 'sanitize.css';

import { GlobalStyle } from 'Styles/global-styles';

import { AppBar } from 'Components/app-bar/app-bar';
import { Footer } from 'Components/footer/footer';

const theme = {
  global: {
    font: {
      family: 'Lato',
    },
    colors: {
      brand: '#ff6600',
    },
  },
};

const App = () => (
  <>
    <Grommet theme={theme} full>
      <GlobalStyle />
      <Box fill>
        <AppBar />
        <Box
          width="xlarge"
          alignSelf="center"
          align="center"
          pad={{ vertical: 'medium' }}
        >
          app body2
        </Box>
        <Footer />
      </Box>
    </Grommet>
  </>
);

export default App;
