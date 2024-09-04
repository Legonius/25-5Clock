import { createSlice } from "@reduxjs/toolkit";

const breakSlice = createSlice({
  name: "Break",
  initialState: { value: 5 },
  reducers: {
    incBreak: (state) => {
      if (state.value === 60) {
        return;
      }
      state.value += 1;
    },
    decBreak: (state) => {
      if (state.value === 1) {
        return;
      }
      state.value -= 1;
    },
    resetBreak: (state) => {
      state.value = 5;
    },
  },
});

export const { incBreak, decBreak, resetBreak } = breakSlice.actions;
export default breakSlice.reducer;
