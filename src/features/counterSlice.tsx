import { createSlice } from '@reduxjs/toolkit'

// interface CounterState seems to work for TS telling count is a number
export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // we add two more actions reset e incrementByAmount
    reset: (state) => {
      state.count = 0;
    }, 
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// we add and export the two actions recently added reset e incrementByAmount
export const { increment,  decrement, reset, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
