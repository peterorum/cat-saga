import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';

import '@babel/polyfill';

import { connect } from 'react-redux';

import styled from 'styled-components';

import { makeCatUrlSelector } from 'Redux/selectors/cat-selectors';

const PhotoBox = styled.div`
  &.photo {
    transition: opacity 1s ease-in;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    &.hidden {
      opacity: 0;
    }

    img {
      width: 90%;
      max-height: 70vh;
      object-fit: contain;
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
    <div className="text-center">
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

      <PhotoBox
        className={`photo text-center mt-8 ${isLoading ? 'hidden' : ''}`}
      >
        {catUrl && (
          <img src={catUrl} alt="cat" onLoad={() => setIsLoading(false)} />
        )}
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
  handleCatUrl: () => dispatch.cat.fetchRequested(),
});

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
