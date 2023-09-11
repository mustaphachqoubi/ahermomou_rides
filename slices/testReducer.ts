import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    test: "testmhbsdkjhfkjdhkf"
  },
  reducers: {
    getTest: (state, action) => {
      state.test = action.payload
    }
  }
})

export const { getTest } = testSlice.actions
export default testSlice.reducer
