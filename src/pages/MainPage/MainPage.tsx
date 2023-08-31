import React from 'react';
import { Box, Grid, Container, CircularProgress } from '@mui/material';
import MainTitle from '../../components/MainTitle/MainTitle';
import GameCard from '../../components/GameCard/GameCard';
import Filters from '../../components/Filters/Filters';
import { useAppSelector } from '../../redux/typingReduxHooks';
import FailedLoading from '../../components/FailedLoading/FailedLoading';

const MainPage: React.FC = () => {
  const currentGames = useAppSelector((state) => state.gamesReducer.foundGames);
  const isGamesLoading = useAppSelector((state) => state.gamesReducer.isLoading);
  const isLoadingError = useAppSelector((state) => state.gamesReducer.isError);
  const requestParams = useAppSelector((state) => state.gamesReducer.lastParams);

  return (
    <main>
      <MainTitle />
      <Box bgcolor="background.default">
        <Container sx={{ py: { md: '20px', xs: '15px' } }} maxWidth="lg">
          <Filters />
          {isLoadingError ? (
            <FailedLoading {...requestParams} />
          ) : isGamesLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container spacing={3} justifyContent="space-evenly">
              {currentGames.map((card) => (
                <GameCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  date={card.release_date}
                  genre={card.genre}
                  pic={card.thumbnail}
                  publisher={card.publisher}
                />
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </main>
  );
};

export default MainPage;
