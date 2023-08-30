import { AppDispatch } from '../store';
import { gameInfoSlice } from './slice';
import axios from 'axios';
import { BASE_URL_INFO, RAPIDAPI_HOST } from '../../utils/constants';

export const fetchGameInfo = (gameId: number) => async (dispatch: AppDispatch) => {
  dispatch(gameInfoSlice.actions.gameInfoFetching);

  const params = { id: gameId };

  const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST,
  };

  try {
    const response = await axios.get(BASE_URL_INFO, { params, headers });
    dispatch(gameInfoSlice.actions.gameInfoFetchingSuccess(response.data));
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      dispatch(gameInfoSlice.actions.gameInfoFetchingError(error.message));
    }
  }
};
