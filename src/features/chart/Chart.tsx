import React from "react";
import { Line } from "react-chartjs-2";
import { default as ChartJS } from "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";

export type ChartProps = {
  data: ChartData<"line">;
  caption: string;
};

function Chart(props: ChartProps) {
  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: props?.caption,
      },
    },
  };

  return <Line data={props.data} options={options}></Line>;
}
console.log(ChartJS.defaults);
export default Chart;
