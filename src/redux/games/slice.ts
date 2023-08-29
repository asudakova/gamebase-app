import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStateGamesType } from '../../utils/types';

const initialState: initialStateGamesType = {
  foundGames: [],
  isLoading: false,
  error: '',
};

export const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gamesFetching(state) {
      state.isLoading = true;
    },
    gamesFetchingSuccess(state, action: PayloadAction<[]>) {
      state.isLoading = false;
      state.error = '';
      state.foundGames = action.payload;
    },
    placesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gamesSlice.reducer;
