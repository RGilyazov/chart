import React from "react";
import Chart from "../features/chart/Chart";
import { FunctionList } from "../features/functionsList/FunctionList";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";
import {
  selectFunctions,
  addFunction,
  deleteFunction,
  changeFunction,
  changeFunctionColor,
} from "../features/functionsList/functionsSlice";
import { NumberInput } from "../components/NumberInput";
import {
  selectChart,
  updateMin,
  updateMax,
  updateSteep,
} from "../features/chart/chartSlice";
import { generateData } from "../features/functionsList/functionUtils";

function App() {
  const dispatch = useDispatch();

  const { functions } = useSelector(selectFunctions);
  const { min, max, steep } = useSelector(selectChart);

  const data = useMemo(
    () =>
      generateData(
        min,
        max,
        steep,
        functions.filter((func) => func.checked && func.correct)
      ),
    [steep, min, max, functions]
  );

  const handleAdd = () => {
    dispatch(addFunction());
  };
  const handleDelete = (index: number) => {
    dispatch(deleteFunction({ index }));
  };
  const handleChange = (index: number, value: string) => {
    dispatch(changeFunction({ index, value }));
    return true;
  };
  const handleMinEdit = (newValue: number) => {
    dispatch(updateMin({ value: newValue }));
  };
  const handleMaxEdit = (newValue: number) => {
    dispatch(updateMax({ value: newValue }));
  };
  const handleSteepEdit = (newValue: number) => {
    dispatch(updateSteep({ value: newValue }));
  };
  const handleColorEdit = (index: number, value: string) => {
    dispatch(changeFunctionColor({ index, value }));
  };
  return (
    <div className="App">
      <div className="flex flex-col items-center text-xl font-bold">
        <div> ENTER FUNCTIONS TO DRAW THE GRAPH </div>
      </div>
      <FunctionList
        functions={functions}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onEdit={handleChange}
        onColorEdit={handleColorEdit}
      />
      <div className="flex flex-col items-center text-xl font-bold">
        <div> ENTER GRAPH PARAMETERS </div>
      </div>
      <div className="flex flex-row">
        <NumberInput
          value={min}
          id="input-min"
          caption="Start:"
          onEdit={handleMinEdit}
        />
        <NumberInput
          value={max}
          id="input-max"
          caption="End:"
          onEdit={handleMaxEdit}
        />
        <NumberInput
          value={steep}
          id="input-steep"
          caption="Steep:"
          onEdit={handleSteepEdit}
        />
      </div>
      <Chart data={data} caption="" />
    </div>
  );
}

export default App;
