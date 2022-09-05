import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";

export type ChartState = { min: number; max: number };
const initialState: ChartState = { min: -10, max: 10 };

export const selectChart = (state: RootState) => state.chart;

export const chartSlice = createSlice({
  name: "chart",
  initialState: initialState,
  reducers: {
    updateMin(state: ChartState, action: PayloadAction<{ value: number }>) {
      state.min = action.payload.value;
    },
    updateMax(state: ChartState, action: PayloadAction<{ value: number }>) {
      state.max = action.payload.value;
    },
  },
});
export const { updateMin, updateMax } = chartSlice.actions;

export default chartSlice.reducer;
