import { createGlobalStyle } from 'styled-components';

import { breakpoints } from 'Components/layout/layout';

export const GlobalStyle = createGlobalStyle`

  body {
    color:rgb(51, 51, 51);
    font-family: 'Open Sans', Arial
  }

  a {
    color: rgb(174, 49, 55);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .hidden-mobile {
    display: none;
  }

  @media (min-width: ${breakpoints.mobile}) {
    .hidden-mobile {
      display: block;
    }
  }

`;
