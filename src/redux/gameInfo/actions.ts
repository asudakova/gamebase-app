import { AppDispatch } from '../store';
import { gameInfoSlice } from './slice';
import axios from 'axios';
import { BASE_URL_INFO, RAPIDAPI_HOST } from '../../utils/constants';
import { FetchInfoGameParamsType } from '../../utils/types';
import { setWithTTL, getWithTTL } from '../../utils/localStorageTTL';

export const fetchGameInfo = (gameId: number) => async (dispatch: AppDispatch) => {
  dispatch(gameInfoSlice.actions.gameInfoFetching());

  const params: FetchInfoGameParamsType = { id: gameId };

  const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': RAPIDAPI_HOST,
  };

  if (getWithTTL(gameId.toString()) !== null) {
    dispatch(gameInfoSlice.actions.gameInfoFetchingSuccess(getWithTTL(gameId.toString())));
  } else {
    try {
      const response = await axios.get(BASE_URL_INFO, {
        params,
        headers,
        signal: AbortSignal.timeout(5000),
      });
      setWithTTL(gameId.toString(), response.data, 300000);
      dispatch(gameInfoSlice.actions.gameInfoFetchingSuccess(response.data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(gameInfoSlice.actions.gameInfoFetchingError());
      }
    }
  }
};
