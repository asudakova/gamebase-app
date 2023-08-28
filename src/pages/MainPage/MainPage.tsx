import React from 'react';
import { Box, Grid, Container } from '@mui/material';
import MainTitle from '../../components/MainTitle/MainTitle';
import GameCard from '../../components/GameCard/GameCard';
import Filters from '../../components/Filters/Filters';

const cards = [1, 2, 3, 4, 5, 6];

const MainPage: React.FC = () => {
  return (
    <main>
      <MainTitle />
      <Box bgcolor="background.default">
        <Container sx={{ py: 8 }} maxWidth="lg" color="background.default">
          <Filters />
          <Grid container spacing={3}>
            {cards.map((card) => (
              <GameCard key={card} />
            ))}
          </Grid>
        </Container>
      </Box>
    </main>
  );
};

export default MainPage;
