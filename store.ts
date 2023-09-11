import { configureStore } from "@reduxjs/toolkit";
import testSlice from "./slices/testReducer";

export const store = configureStore({
  reducer: {
    test: testSlice
  }
})
