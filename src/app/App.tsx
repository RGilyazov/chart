import React from "react";
import Chart from "../features/chart/Chart";
import { compile, EvalFunction } from "mathjs";
import { FunctionList } from "../features/functionsList/functionList";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFunctions,
  addFunction,
  deleteFunction,
  changeFunction,
  functionItemData,
  functionListData,
} from "../features/functionsList/functionsSlice";
import { NumberInput } from "../features/chart/NumberInput";
import {
  selectChart,
  updateMin,
  updateMax,
} from "../features/chart/chartSlice";

function generateData(
  min: number,
  max: number,
  steep: number,
  functions: functionListData
) {
  const labels = [];
  const compiledFunctions: EvalFunction[] = [];
  const datasets: { label: string; data: number[]; backgroundColor: string }[] =
    [];
  functions.forEach((func, index) => {
    datasets.push({
      label: func.value,
      data: [],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    });
    compiledFunctions.push(compile(func.value));
  });
  let x = min;
  while (x < max) {
    labels.push(x.toFixed(1));
    for (let ind = 0; ind < functions.length; ind++)
      datasets[ind].data.push(compiledFunctions[ind].evaluate({ x: x }));
    x += steep;
  }
  return {
    labels,
    datasets,
  };
}

function App() {
  const dispatch = useDispatch();

  const { functions } = useSelector(selectFunctions);
  const { min, max } = useSelector(selectChart);

  const steep = 0.2;
  const data = generateData(
    min,
    max,
    steep,
    functions.filter((func) => func.checked && func.correct)
  );

  const handleAdd = () => {
    dispatch(addFunction());
  };
  const handleDelete = (index: number) => {
    dispatch(deleteFunction({ index }));
  };
  const handleChange = (index: number, value: functionItemData) => {
    dispatch(changeFunction({ index, value }));
    return true;
  };
  const handleMinEdit = (newValue: number) => {
    dispatch(updateMin({ value: newValue }));
  };
  const handleMaxEdit = (newValue: number) => {
    dispatch(updateMax({ value: newValue }));
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
      />
      <div>
        <NumberInput value={min} onEdit={handleMinEdit} />
        <NumberInput value={max} onEdit={handleMaxEdit} />
      </div>
      <Chart data={data} caption="" />
    </div>
  );
}

export default App;
