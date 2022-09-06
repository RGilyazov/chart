import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";

export type ChartState = { min: number; max: number; steep: number };
const initialState: ChartState = { min: -10, max: 10, steep: 0.2 };

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
    updateSteep(state: ChartState, action: PayloadAction<{ value: number }>) {
      state.steep = action.payload.value;
    },
  },
});
export const { updateMin, updateMax, updateSteep } = chartSlice.actions;

export default chartSlice.reducer;
