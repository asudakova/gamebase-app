import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import bg from '/bg-title.jpg';

const MainTitle: React.FC = () => {
  return (
    <Box
      sx={{
        pt: 12,
        pb: 12,
        bgcolor: 'rgba(0,0,0,.7)',
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'multiply',
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          fontSize="2em"
          align="center"
          gutterBottom
          sx={{
            fontFamily: 'Revalia',
            color: '#FFF',
          }}
        >
          {'Discover the best '}
          <Link href="https://www.freetogame.com/" target="_blank" underline="hover">
            free-to-play
          </Link>
          {' games!'}
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
          fontSize="1.5em"
          sx={{ fontFamily: 'Revalia' }}
        >
          Search for what to play next!
        </Typography>
      </Container>
    </Box>
  );
};

export default MainTitle;
