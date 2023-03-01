import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameScore: {
    win: 0,
    lose: 0,
  },
  status: false,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    statusGame: (state, { payload }: { payload: boolean }) => {
      state.status = payload;
      state.gameScore.win = payload ? state.gameScore.win + 1 : state.gameScore.win;
      state.gameScore.lose = payload ? state.gameScore.lose : state.gameScore.lose + 1;
    },
  },
});

export default gameSlice.reducer;

export const { statusGame } = gameSlice.actions;
