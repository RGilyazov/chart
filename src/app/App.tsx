import React from "react";
import Chart from "../components/Chart";
import { compile, EvalFunction } from "mathjs";
import { FunctionList } from "../features/functionsList/functionList";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFunctions,
  addFunction,
  deleteFunction,
  changeFunction,
  functionItemData,
} from "../features/functionsList/functionsSlice";

function generateData(
  min: number,
  max: number,
  steep: number,
  functions: string[]
) {
  const labels = [];
  const compiledFunctions: EvalFunction[] = [];
  const datasets: { label: string; data: number[]; backgroundColor: string }[] =
    [];
  functions.forEach((func, index) => {
    datasets.push({
      label: func,
      data: [],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    });
    compiledFunctions.push(compile(func));
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
  const min = -10;
  const max = 10;
  const steep = 0.2;
  const funcs = ["sin(x)", "cos(x)"];
  const data = generateData(min, max, steep, funcs);
  const dispatch = useDispatch();

  const { functions } = useSelector(selectFunctions);

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

  return (
    <div className="App">
      <FunctionList
        functions={functions}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onEdit={handleChange}
      />
      hello world
      <Chart data={data} />
    </div>
  );
}

export default App;
