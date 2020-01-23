import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { layout, flexbox, typography, space } from 'styled-system';

const Box = styled.div`
  ${layout}
  ${typography}
  ${flexbox}
  ${space}
`;

export const About = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box mb={4}>About cats</Box>
      <div>
        <Link to="/">Home</Link>
      </div>
    </Box>
  );
};

export default About;
