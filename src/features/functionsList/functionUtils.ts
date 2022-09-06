import { functionListData } from "./functionsSlice";
import { EvalFunction, compile } from "mathjs";

export function checkIntervalParams(min: number, max: number, steep: number) {
  if (steep < 0 || (max - min) / steep > 1000) {
    return "too many steeps, pls reduce interval or increase steep";
  }
  return "";
}
export function generateData(
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
      backgroundColor: func.color,
    });
    compiledFunctions.push(compile(func.value));
  });
  if (checkIntervalParams(min, max, steep) === "") {
    let x = min;
    while (x < max) {
      labels.push(x.toFixed(1));
      for (let ind = 0; ind < functions.length; ind++)
        datasets[ind].data.push(compiledFunctions[ind].evaluate({ x: x }));
      x += steep;
    }
  }
  return {
    labels,
    datasets,
  };
}
