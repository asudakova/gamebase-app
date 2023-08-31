import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateGamesType, FetchGamesParamsType, GameCardType } from '../../utils/types';

const initialState: InitialStateGamesType = {
  foundGames: [],
  isLoading: false,
  isError: false,
  lastParams: {},
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesFetching(state) {
      state.isLoading = true;
    },
    gamesFetchingSuccess(state, action: PayloadAction<GameCardType[]>) {
      state.isLoading = false;
      state.isError = false;
      state.foundGames = action.payload;
    },
    gamesFetchingError(state, action: PayloadAction<FetchGamesParamsType>) {
      state.isLoading = false;
      state.isError = true;
      state.lastParams = action.payload;
    },
  },
});

export default gamesSlice.reducer;
