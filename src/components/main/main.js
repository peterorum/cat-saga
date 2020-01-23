import React, { useState, useEffect } from 'react';

import '@babel/polyfill';

import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { typography, space } from 'styled-system';

import { makeCatUrlSelector } from 'Redux/selectors/cat-selectors';
import { getCatUrl } from 'Redux/reducers/cat-reducer';

const Box = styled.div`
  ${typography}
`;

const Button = styled.button`
  padding: 1rem;
  border: 1px solid #000;
  border-radius: 0.25rem;
  background: transparent;
  padding: 1.5rem;
  font-size: 1rem;

  &:hover {
    background: rgb(254, 235, 200);
  }
`;

const PhotoBox = styled.div`
  ${space}
  ${typography}

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
    <Box textAlign="center">
      <div>
        <Button type="button" disabled={isLoading} onClick={getCats}>
          Another
        </Button>
      </div>

      <PhotoBox
        textAlign="center"
        mt={3}
        className={`photo ${isLoading ? 'hidden' : ''}`}
      >
        {catUrl && (
          <img src={catUrl} alt="cat" onLoad={() => setIsLoading(false)} />
        )}
      </PhotoBox>
    </Box>
  );
};

export default Main;
