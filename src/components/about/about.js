import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div``;

export const About = () => {
  return (
    <AboutContainer>
      <div className="flex flex-col items-center">
        <div className="mb-6">About cats</div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
