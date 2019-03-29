import React, { useState, useEffect } from 'react';

import { Box, Button, Image } from 'grommet';

export const Main = () => {
  const [src, setSrc] = useState();

  useEffect(() => setSrc('https://placekitten.com/800/600'), []);

  return (
    <Box
      width="xlarge"
      alignSelf="center"
      align="center"
      pad={{ vertical: 'medium' }}
      direction="column"
    >
      <Box>
        <Button label="Another" onClick={() => {}} />
      </Box>

      <Box pad="medium">{src && <Image src={src} />}</Box>
    </Box>
  );
};
