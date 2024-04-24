import { createReducer } from "@reduxjs/toolkit";
import { addGoal, removeGoal, toggleGoal } from "../actions/goalAction";

const initialState = [];
const goalReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addGoal, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(removeGoal, (state, action) => {
      return state.filter((goal) => goal.id !== action.payload);
    })
    .addCase(toggleGoal, (state, action) => {
      const goal = state.find((goal) => goal.id === action.payload);
      const newState = state.filter((goal) => goal.id !== action.payload);
      return [...newState, { ...goal, completed: !goal.completed }];
    });
});

export default goalReducer;
