import React from 'react';

import { Box, Text, Anchor } from 'grommet';

export const Footer = () => (
  <Box
    align="end"
    pad="small"
    border={{
      color: 'light-3',
      size: 'small',
      side: 'top',
    }}
  >
    <Text size="small">
      &copy; 2019 Peter Orum. Cats from{' '}
      <Anchor href="https://thecatapi.com/">The Cat API</Anchor>
    </Text>
  </Box>
);
