import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";
import { compile, evaluate } from "mathjs";
export type functionItemData = {
  value: string;
  checked?: boolean;
  correct?: boolean;
};
export type functionListData = functionItemData[];

export type functionState = { functions: functionListData };
const initialState: functionState = {
  functions: [
    { value: "sin(x)", checked: true, correct: true },
    { value: "cos(x)", checked: true, correct: true },
  ],
};

export const selectFunctions = (state: RootState) => {
  return state.functions;
};

export const functionsSlice = createSlice({
  name: "functions",
  initialState: initialState,
  reducers: {
    addFunction(state: functionState, action: PayloadAction) {
      state.functions.push({ value: "", checked: true, correct: false });
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
      const newValue = action.payload.value;
      try {
        evaluate(newValue.value, { x: 0 });
        newValue.checked = true;
        newValue.correct = true;
      } catch {
        newValue.checked = true;
        newValue.correct = false;
      }
      state.functions = state.functions.map((value, index) =>
        index === action.payload.index ? newValue : value
      );
    },
  },
});
export const { addFunction, deleteFunction, changeFunction } =
  functionsSlice.actions;

export default functionsSlice.reducer;
