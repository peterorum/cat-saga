import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '@babel/polyfill';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { Box, Button, Image } from 'grommet';

import { setCatUrl } from 'Redux/actions/cat';

const PhotoBox = styled(Box)`
  &.photo {
    transition: opacity 1s;
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
  const [isLoading, setIsLoading] = useState(false);

  // on mount
  useEffect(() => {
    getCats();
  }, []);

  const getCats = async () => {
    setIsLoading(true);

    try {
      // get cat-api key from https://thecatapi.com/
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search?mime_types=jpg,png',
        {
          method: 'get',
          headers: {
            'x-api-key': process.env.cat_api,
          },
        },
      );

      const json = await response.json();

      handleCatUrl(json[0].url);
      setTimeout(() => setIsLoading(false), 1000);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('fetch error:', error);
    }
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
        {cat.url && <Image src={cat.url} fit="cover" />}
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
  handleCatUrl: url => {
    dispatch(setCatUrl(url));
  },
});

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
