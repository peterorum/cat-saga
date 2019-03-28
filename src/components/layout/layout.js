import styled from 'styled-components';

export const breakpoints = {
  mobile: '768px',
};

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 0;
  }
`;
