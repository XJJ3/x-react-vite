import { css } from '@emotion/react';
import { Box, Button } from '@mui/material';

const ChildMenuItem = () => {
  return (
    <Box>
      <Button
        css={css`
          width: 100px;
          height: 30px;
          background: red;
        `}>
        111
      </Button>
      <div
        css={css`
          width: 100px;
          height: 30px;
          background: red;
        `}>
        11
      </div>
    </Box>
  );
};

export default ChildMenuItem;
