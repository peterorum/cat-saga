import React from 'react';

import styled from 'styled-components';
import { color, typography, space } from 'styled-system';

const Box = styled.div`
  ${color}
  ${space}
  ${typography}
`;

export const AppBar = () => (
  <Box textAlign="center" pt={3} color="primary">
    <h1>Cats</h1>
  </Box>
);
