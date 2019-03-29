import React from 'react';

import { Box, Heading } from 'grommet';

export const AppBar = props => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="small"
    style={{ zIndex: '1' }}
    {...props}
  >
    <Heading level="3" margin="none" color="white">
      Cats
    </Heading>
  </Box>
);
