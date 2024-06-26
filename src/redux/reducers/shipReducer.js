import { createReducer } from "@reduxjs/toolkit";
import { addShip, removeShip } from "../actions/shipAction";

const initialState = [];
const shipReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addShip, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(removeShip, (state, action) => {
      return state.filter((ship) => ship.id !== action.payload);
    });
});

export default shipReducer;
