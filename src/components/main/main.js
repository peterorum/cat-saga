import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '@babel/polyfill';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { Box, Button, Image } from 'grommet';

import { getCatUrl } from 'Redux/actions/cat';

const PhotoBox = styled(Box)`
  &.photo {
    transition: opacity 1s ease-in;
    opacity: 1;

    &.hidden {
      opacity: 0;
    }

    img {
      width: 90%;
      max-height: 70vh;
    }
  }
`;

export const Main = ({ cat, handleCatUrl }) => {
  const [isLoading, setIsLoading] = useState(true);

  // on mount
  useEffect(() => {
    getCats();
  }, []);

  const getCats = () => {
    setIsLoading(true);
    handleCatUrl();
  };

  return (
    <Box
      width="xlarge"
      alignSelf="center"
      align="center"
      pad={{ vertical: 'medium' }}
      direction="column"
    >
      <Box>
        <Button
          label="Another"
          disabled={isLoading}
          onClick={() => {
            getCats();
          }}
        />
      </Box>

      <PhotoBox pad="medium" className={`photo ${isLoading ? 'hidden' : ''}`}>
        {cat.url && (
          <Image src={cat.url} onLoad={() => setIsLoading(false)} fit="cover" />
        )}
      </PhotoBox>
    </Box>
  );
};

Main.propTypes = {
  cat: PropTypes.object,
  handleCatUrl: PropTypes.func,
};

const mapStateToProps = state => ({
  cat: state.cat,
});

const mapDispatchToProps = dispatch => ({
  handleCatUrl: () => dispatch(getCatUrl()),
});

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
