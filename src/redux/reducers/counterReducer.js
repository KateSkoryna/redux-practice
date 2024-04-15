import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "../actions/CounterAction";

const initialState = 0;
const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      return state + 1;
    })
    .addCase(decrement, (state) => {
      return state - 1;
    });
});

export default counterReducer;
