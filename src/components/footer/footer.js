import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { typography, space } from 'styled-system';

const Box = styled('div')`
  ${space}
  ${typography}
`;

export const Footer = () => (
  <Box textAlign="right" mt={3} pr={3} pb={4} fontSize={1}>
    <Link to="/about">About</Link> &middot; &copy; 2019 Peter Orum. &middot;
    Cats from <a href="https://thecatapi.com/">The Cat API</a>
  </Box>
);
