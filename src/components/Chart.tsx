import React from "react";
import { Line } from "react-chartjs-2";
import { default as ChartJS } from "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";

export type ChartProps = { data: ChartData<"line"> };

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};
function Chart(Props: ChartProps) {
  return <Line data={Props.data} options={options}></Line>;
}
console.log(ChartJS.defaults);
export default Chart;
