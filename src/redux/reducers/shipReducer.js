import { createReducer } from "@reduxjs/toolkit";

const initialState = [];
const shipReducer = createReducer(initialState, (builder) => {
  return builder;
  //   builder
  //     .addCase(increment, (state) => {
  //       return state + 1;
  //     })
  //     .addCase(decrement, (state) => {
  //       return state - 1;
  //     });
});

export default shipReducer;
