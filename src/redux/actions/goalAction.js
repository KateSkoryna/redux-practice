import { createAction } from "@reduxjs/toolkit";

export const addGoal = createAction("goals/addGoal");
export const removeGoal = createAction("goals/removeGoal");
export const toggleGoal = createAction("goals/toggleGoal");
