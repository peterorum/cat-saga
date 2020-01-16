import React, { useState, useEffect } from 'react';

import '@babel/polyfill';

import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';

import { makeCatUrlSelector } from 'Redux/selectors/cat-selectors';
import { getCatUrl } from 'Redux/reducers/cat-reducer';

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

export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  // on mount
  useEffect(() => {
    getCats();
  }, []);

  const getCats = () => {
    setIsLoading(true);
    dispatch(getCatUrl());
  };

  const catUrl = useSelector(makeCatUrlSelector);

  return (
    <div className="text-center">
      <div>
        <button type="button" disabled={isLoading} onClick={getCats}>
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

export default Main;
