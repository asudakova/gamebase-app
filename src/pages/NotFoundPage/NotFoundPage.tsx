import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFoundPage: React.FC = () => {
  return (
    <Box textAlign="center" mt="30px">
      <Typography variant="h6" color="text.secondary">
        Nothing was found here
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
