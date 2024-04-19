import { createReducer } from "@reduxjs/toolkit";
import { addGoal, removeGoal } from "../actions/goalAction";

const initialState = [];
const goalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addGoal, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(removeGoal, (state, action) => {
      return state.filter((goal) => goal.id !== action.payload);
    });
});

export default goalReducer;
