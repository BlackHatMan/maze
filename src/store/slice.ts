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
    },
  },
});

export default gameSlice.reducer;

export const { statusGame } = gameSlice.actions;
