import React from 'react';

export const Footer = () => (
  <div
    align="end"
    pad="small"
    border={{
      color: 'light-3',
      size: 'small',
      side: 'top',
    }}
  >
    <div size="small">
      &copy; 2019 Peter Orum. Cats from{' '}
      <a href="https://thecatapi.com/">The Cat API</a>
    </div>
  </div>
);
