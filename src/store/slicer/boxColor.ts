import { createSlice } from '@reduxjs/toolkit';

interface BoxColor {
  color: string[];
  random: number;
}

const initialState: BoxColor = {
  color: ['189, 30, 36', '233, 118, 0', '246, 199, 0', '0, 114, 86', '0, 103, 167', '150, 79, 142'],
  random: 0,
};

const boxColorSlice = createSlice({
  name: 'boxColor',
  initialState,
  reducers: {
    getRandom: (state) => {
      state.random = Math.floor(Math.random() * state.color.length);
    },
  },
});

export const { getRandom } = boxColorSlice.actions;

export default boxColorSlice.reducer;
