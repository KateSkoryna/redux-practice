import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import shipReducer from "./reducers/shipReducer";
import goalReducer from "./reducers/goalReducer";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    ships: shipReducer,
    goals: goalReducer,
  },
});

export default store;
