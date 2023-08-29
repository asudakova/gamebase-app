import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStateGameinfoType, IGameInfo } from '../../utils/types';

const initialState: initialStateGameinfoType = {
  info: {} as IGameInfo,
  isLoading: false,
  error: '',
};

export const gameInfoSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    gameInfoFetching(state) {
      state.isLoading = true;
    },
    gameInfoFetchingSuccess(state, action: PayloadAction<IGameInfo>) {
      state.isLoading = false;
      state.error = '';
      state.info = action.payload;
    },
    gameInfoFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default gameInfoSlice.reducer;
