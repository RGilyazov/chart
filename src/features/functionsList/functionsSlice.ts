import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";

export type functionItemData = { value: string };
export type functionListData = functionItemData[];

export type functionState = { functions: functionListData };
const initialState: functionState = {
  functions: [{ value: "sin(x)" }, { value: "cos(x)" }],
};

export const selectFunctions = (state: RootState) => {
  console.log(state);
  return state.functions;
};

export const functionsSlice = createSlice({
  name: "functions",
  initialState: initialState,
  reducers: {
    addFunction(state: functionState, action: PayloadAction) {
      state.functions.push({ value: "x/2" });
    },
    deleteFunction(
      state: functionState,
      action: PayloadAction<{ index: number }>
    ) {
      state.functions = state.functions.filter(
        (value, index) => index !== action.payload.index
      );
    },
    changeFunction(
      state: functionState,
      action: PayloadAction<{ index: number; value: functionItemData }>
    ) {
      state.functions = state.functions.map((value, index) =>
        index === action.payload.index ? action.payload.value : value
      );
    },
  },
});
export const { addFunction, deleteFunction, changeFunction } =
  functionsSlice.actions;

export default functionsSlice.reducer;
