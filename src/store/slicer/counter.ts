import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  isAsync: boolean;
}

const initialState: CounterState = { value: 0, isAsync: false };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const asyncIncrease = (action: any) => (dispatch: any) => {
  try {
    fetch('http://localhost:4000', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify({ payload: action }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(incrementByAmount(Number(data.payload)));
      });
  } catch (e) {}
};

export const delayIncrease = (action: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(increment());
  }, action * 1000);
};

export default counterSlice.reducer;
