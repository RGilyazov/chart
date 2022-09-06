import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/rootReducer";
import { evaluate } from "mathjs";
export type functionItemData = {
  value: string;
  checked?: boolean;
  correct?: boolean;
  id: number;
  color: string;
};
export type functionListData = functionItemData[];

export type functionState = { functions: functionListData };
const initialState: functionState = {
  functions: [
    { value: "sin(x)", checked: true, correct: true, id: -1, color: "#FF0000" },
    { value: "cos(x)", checked: true, correct: true, id: -2, color: "#00FF00" },
    { value: "x/4", checked: true, correct: true, id: -2, color: "#FFFF00" },
  ],
};

let lastListId = 1;

export const selectFunctions = (state: RootState) => {
  return state.functions;
};

export const functionsSlice = createSlice({
  name: "functions",
  initialState: initialState,
  reducers: {
    addFunction(state: functionState, action: PayloadAction) {
      lastListId += 1;
      state.functions.push({
        value: "",
        checked: true,
        correct: false,
        id: lastListId,
        color: "#0000FF",
      });
    },
    deleteFunction(
      state: functionState,
      action: PayloadAction<{ index: number }>
    ) {
      state.functions = state.functions.filter(
        (value, index) => index !== action.payload.index
      );
    },
    changeFunctionColor(
      state: functionState,
      action: PayloadAction<{ index: number; value: string }>
    ) {
      state.functions[action.payload.index].color = action.payload.value;
    },
    changeFunction(
      state: functionState,
      action: PayloadAction<{ index: number; value: string }>
    ) {
      const newValue = action.payload.value;
      let checked: boolean;
      let correct: boolean;
      try {
        evaluate(newValue, { x: 0 });
        checked = true;
        correct = true;
      } catch {
        checked = true;
        correct = false;
      }
      state.functions.forEach((func, index) => {
        if (index === action.payload.index) {
          func.value = newValue;
          func.checked = checked;
          func.correct = correct;
        }
      });
    },
  },
});
export const {
  addFunction,
  deleteFunction,
  changeFunction,
  changeFunctionColor,
} = functionsSlice.actions;

export default functionsSlice.reducer;
