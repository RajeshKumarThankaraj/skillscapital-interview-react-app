import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ chartData }) => {
  const data = {
    labels: chartData.map((item) => item.pageNo), // X-axis (Page Numbers)
    datasets: [
      {
        label: "Used Number",
        data: chartData.map((item) => item.usedNo), // Y-axis (Used Numbers)
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        pointRadius: 5,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Page No vs Used No Line Chart" },
    },
    scales: {
      x: {
        title: { display: true, text: "Page Number" },
        type: "linear",
      },
      y: {
        title: { display: true, text: "Used Number" },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
