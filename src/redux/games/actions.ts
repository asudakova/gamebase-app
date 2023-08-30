import { AppDispatch } from '../store';
import { gamesSlice } from './slice';
import axios from 'axios';
import { FetchGamesParamsType } from '../../utils/types';
import { BASE_URL_GAMES, RAPIDAPI_HOST } from '../../utils/constants';

export const fetchGames =
  (platform: string, genre: string, sortby: string) => async (dispatch: AppDispatch) => {
    dispatch(gamesSlice.actions.gamesFetching());

    const params: FetchGamesParamsType = {
      platform: platform,
      'sort-by': sortby,
    };

    if (genre !== 'all') {
      params['category'] = genre;
    }

    const headers = {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': RAPIDAPI_HOST,
    };

    try {
      const response = await axios.get(BASE_URL_GAMES, { params, headers });
      dispatch(gamesSlice.actions.gamesFetchingSuccess(response.data));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        dispatch(gamesSlice.actions.placesFetchingError(error.message));
      }
    }
  };
