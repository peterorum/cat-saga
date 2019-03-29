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

    // get cat-api key from https://thecatapi.com/
    fetch('https://api.thecatapi.com/v1/images/search', {
      method: 'get',
      headers: {
        'x-api-key': process.env.cat_api,
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
