import React from 'react';
import { Typography, Stack, Grid } from '@mui/material';
import { SystemReqType } from '../../utils/types';

const SystemReq: React.FC<SystemReqType> = ({ ...requirements }) => {
  return (
    <>
      <Typography fontSize={24} color="text.primary" sx={{ fontWeight: 'bold' }} mb="20px">
        Minimum System Requirements
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={5}>
        <Grid item xs={6} md={4}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              OS
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {requirements?.os || '-'}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              Processor
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {requirements?.processor || '-'}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              Graphics
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {requirements?.graphics || '-'}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              Storage
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {requirements?.storage || '-'}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={6} md={4}>
          <Stack>
            <Typography fontSize={20} color="text.secondary">
              Memory
            </Typography>
            <Typography fontSize={20} color="text.primary">
              {requirements?.memory || '-'}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default SystemReq;
