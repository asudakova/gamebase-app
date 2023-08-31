import React from 'react';
import { Box, Grid } from '@mui/material';
import { ScreenshotsType } from '../../utils/types';

const CarouselItem: React.FC<{ item: ScreenshotsType }> = (props) => {
  return (
    <Grid item md={12} overflow="hidden">
      <Box
        component="img"
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'contain',
        }}
        alt="Screenshot"
        src={props?.item?.image}
      />
    </Grid>
  );
};

export default CarouselItem;
