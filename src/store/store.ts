import { configureStore } from '@reduxjs/toolkit';
import gameSlice from './slice';

export const store = configureStore({
  reducer: gameSlice,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
