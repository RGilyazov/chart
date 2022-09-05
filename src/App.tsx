import React from "react";
import Chart from "./components/Chart";
import { compile, EvalFunction } from "mathjs";

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

  return (
    <div className="App">
      hello world
      <Chart data={data} />
    </div>
  );
}

export default App;
