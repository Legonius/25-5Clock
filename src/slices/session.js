import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
  name: "sessionLength",
  initialState: { value: 25 },
  reducers: {
    increment: (state) => {
      if (state.value === 60) {
        return;
      }
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value === 1) {
        return;
      }
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 25;
    },
  },
});

export const { increment, decrement, reset } = sessionSlice.actions;

export default sessionSlice.reducer;
