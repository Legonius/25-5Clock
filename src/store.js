import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./slices/session";
import breakReducer from "./slices/break";

export const store = configureStore({
  reducer: { session: sessionReducer, breakLength: breakReducer },
});
