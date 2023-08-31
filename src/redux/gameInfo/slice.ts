import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialStateGameinfoType, GameInfoType } from '../../utils/types';

const initialState: InitialStateGameinfoType = {
  info: {} as GameInfoType,
  isLoading: false,
  isError: false,
};

export const gameInfoSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gameInfoFetching(state) {
      state.isLoading = true;
    },
    gameInfoFetchingSuccess(state, action: PayloadAction<GameInfoType>) {
      state.isLoading = false;
      state.isError = false;
      state.info = action.payload;
    },
    gameInfoFetchingError(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default gameInfoSlice.reducer;
