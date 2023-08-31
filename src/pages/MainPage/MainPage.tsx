import React from 'react';
import { Box, Container, CircularProgress } from '@mui/material';
import MainTitle from '../../components/MainTitle/MainTitle';
import Filters from '../../components/Filters/Filters';
import { useAppSelector } from '../../redux/typingReduxHooks';
import FailedLoading from '../../components/FailedLoading/FailedLoading';
import FoundGames from '../../components/FoundGames/FoundGames';

const MainPage: React.FC = () => {
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
            <FoundGames />
          )}
        </Container>
      </Box>
    </main>
  );
};

export default MainPage;
