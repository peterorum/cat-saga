import React, { useState, useEffect } from 'react';

import { Box, Button, Image } from 'grommet';

export const Main = () => {
  const [src, setSrc] = useState();

  // on mount
  useEffect(() => {
    getCats();
  }, []);

  const getCats = () => {
    // eslint-disable-next-line compat/compat
    fetch('https://api.thecatapi.com/v1/images/search', {
      method: 'get',
      headers: {
        'x-api-key': '63937a0d-ea01-4880-84cf-b541906d60dc',
      },
    })
      .then(response => response.json())
      .then(json => {
        setSrc(json[0].url);
      })
      .catch(error => {
        console.error('fetch error:', error);
      });
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
          onClick={() => {
            getCats();
          }}
        />
      </Box>

      <Box pad="medium">
        {src && <Image src={src} fit="cover" style={{ maxHeight: '70vh' }} />}
      </Box>
    </Box>
  );
};
