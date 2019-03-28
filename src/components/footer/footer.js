import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.footer`
  text-align: right;
  padding: 1rem;
  font-size: 75%;
`;

export const Footer = () => <Wrapper>&copy; 2019 Peter Orum</Wrapper>;
