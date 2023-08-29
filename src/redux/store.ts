import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games/slice';
import gameInfoReducer from './gameInfo/slice';

const rootReducer = combineReducers({
  gamesReducer,
  gameInfoReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
