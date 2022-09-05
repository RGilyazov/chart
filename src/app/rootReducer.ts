import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import chartReducer from "../features/chart/chartSlice";
import functionsReducer from "../features/functionsList/functionsSlice";

const rootReducer = combineReducers({
  chart: chartReducer,
  functions: functionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
