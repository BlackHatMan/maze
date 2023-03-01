import { createSlice } from '@reduxjs/toolkit';
import { Area } from './../Area';

const initialState = {
  game: {},
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    createGame: (state, { payload }: { payload: number }) => {
      state.game = new Area(payload);
    },
  },
});

export default gameSlice.reducer;

export const { createGame } = gameSlice.actions;
