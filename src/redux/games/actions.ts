import { AppDispatch } from '../store';
import { gamesSlice } from './slice';
import axios from 'axios';
import { FetchGamesParamsType } from '../../utils/types';

export const fetchGames =
  (platform: string, genre: string, sortby: string) => async (dispatch: AppDispatch) => {
    dispatch(gamesSlice.actions.gamesFetching());

    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

    const params: FetchGamesParamsType = {
      platform: platform || 'all',
      'sort-by': sortby || 'relevance',
    };

    if (genre !== '') {
      params['category'] = genre;
    }

    const headers = {
      'X-RapidAPI-Key': 'f1c14ceb6fmsh60dec2b060eac23p187361jsn335f366df162',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    };

    try {
      const response = await axios.get(url, { params, headers });
      dispatch(gamesSlice.actions.gamesFetchingSuccess(response.data));
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        dispatch(gamesSlice.actions.placesFetchingError(error.message));
      }
    }
  };
