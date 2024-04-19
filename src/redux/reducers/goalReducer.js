import { createReducer } from "@reduxjs/toolkit";

const initialState = [];
const goalReducer = createReducer(initialState, (builder) => {
  return builder;
  //   builder
  //     .addCase(increment, (state) => {
  //       return state + 1;
  //     })
  //     .addCase(decrement, (state) => {
  //       return state - 1;
  //     });
});

export default goalReducer;
