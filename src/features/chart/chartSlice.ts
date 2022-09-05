import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";

export type ChartState = {};
const initialState: ChartState = {};

export const selectChart = (state: RootState) => state.chart;

export const chartSlice = createSlice({
  name: "chart",
  initialState: initialState,
  reducers: {
    test(state, action: PayloadAction) {
      //if (state.activeCell) state.activeCell.activate = false;
    },
  },
});
export const { test } = chartSlice.actions;

export default chartSlice.reducer;
