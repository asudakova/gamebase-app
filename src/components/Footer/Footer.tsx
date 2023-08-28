import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: 'background.default', p: 3 }} component="footer">
      <Typography variant="body2" color="text.secondary" align="center">
        {'Created by '}
        <Link color="inherit" href="https://github.com/asudakova" target="_blank">
          Sudakova A
        </Link>
        {' ' + new Date().getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
