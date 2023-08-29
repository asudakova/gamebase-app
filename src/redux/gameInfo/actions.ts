import { AppDispatch } from '../store';
import { gameInfoSlice } from './slice';
import axios from 'axios';

export const fetchGameInfo = (gameId: number) => async (dispatch: AppDispatch) => {
  dispatch(gameInfoSlice.actions.gameInfoFetching);

  const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game';

  const params = { id: gameId };

  const headers = {
    'X-RapidAPI-Key': 'f1c14ceb6fmsh60dec2b060eac23p187361jsn335f366df162',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
  };

  try {
    const response = await axios.get(url, { params, headers });
    dispatch(gameInfoSlice.actions.gameInfoFetchingSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      dispatch(gameInfoSlice.actions.gameInfoFetchingError(error.message));
    }
  }
};
