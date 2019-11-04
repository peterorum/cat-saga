import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '@babel/polyfill';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { getCatUrl } from 'Redux/actions/cat-actions';
import { makeCatUrlSelector } from 'Redux/selectors/cat-selectors';

const PhotoBox = styled.div`
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

export const Main = ({ catUrl, handleCatUrl }) => {
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
    <div>
      {/*
      width="xlarge"
      alignSelf="center"
      align="center"
      pad={{ vertical: 'medium' }}
      direction="column"
       */}
      <div>
        <button
          type="button"
          disabled={isLoading}
          onClick={() => {
            getCats();
          }}
        >
          Another
        </button>
      </div>

      <PhotoBox pad="medium" className={`photo ${isLoading ? 'hidden' : ''}`}>
        {catUrl && <img src={catUrl} onLoad={() => setIsLoading(false)} />}
        {/* fit="cover"  */}
      </PhotoBox>
    </div>
  );
};

Main.propTypes = {
  catUrl: PropTypes.string,
  handleCatUrl: PropTypes.func,
};

const mapStateToProps = state => ({
  catUrl: makeCatUrlSelector(state),
});

const mapDispatchToProps = dispatch => ({
  handleCatUrl: () => dispatch(getCatUrl()),
});

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
