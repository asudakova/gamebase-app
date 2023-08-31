import React, { useState } from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../redux/typingReduxHooks';
import { fetchGames } from '../../redux/games/actions';
import { fetchGameInfo } from '../../redux/gameInfo/actions';
import { FetchGamesParamsType, FetchInfoGameParamsType } from '../../utils/types';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';

const FailedLoading: React.FC<FetchGamesParamsType | FetchInfoGameParamsType | {}> = (params) => {
  const [attempts, setAttempts] = useState(3);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.gamesReducer.isLoading);

  const handleTryFetchClick = () => {
    setAttempts((prev) => prev - 1);
    if (params.hasOwnProperty('id') && Object.keys(params).length !== 0) {
      const againParams = params as FetchInfoGameParamsType;
      dispatch(fetchGameInfo(againParams.id));
    } else {
      const againParams = params as FetchGamesParamsType;
      dispatch(fetchGames(againParams.platform, againParams.category || '', againParams['sort-by']));
    }
  };

  return (
    <>
      {isLoading ? (
        <Box textAlign="center" mt="30px">
          <CircularProgress />
        </Box>
      ) : (
        <Stack direction="column" alignItems="center">
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            color="text.primary"
            sx={{ fontWeight: 'bold' }}
          >
            OOPS!
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Something went wrong here :c
          </Typography>
          <Typography gutterBottom variant="h6" color="text.secondary">
            You have {attempts} more attempts to try
          </Typography>
          {attempts === 0 ? (
            <Button variant="contained" onClick={handleTryFetchClick} disabled>
              Try
            </Button>
          ) : (
            <Button variant="contained" onClick={handleTryFetchClick}>
              Try
            </Button>
          )}
        </Stack>
      )}
    </>
  );
};

export default FailedLoading;
