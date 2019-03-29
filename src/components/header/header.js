import React from 'react';

import styled from 'styled-components';

import { breakpoints } from 'Components/layout/layout';
import { fonts } from 'Styles/global-styles';

const Wrapper = styled.header`
  z-index: 100;
  background: #000;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1rem;

  a {
    color: #fff;
  }

  .brand {
    font-size: 1.2rem;
    font-family: ${fonts.serif};
    font-weight: bold;
  }

/* @media (min-width: ${breakpoints.mobile}) {
    position: fixed;
  } */
`;

export const Header = () => (
  <Wrapper>
    <nav>
      <a className="brand" href="/">
        Cats
      </a>
    </nav>
  </Wrapper>
);
