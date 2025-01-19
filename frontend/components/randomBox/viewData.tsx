import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./viewData.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph: React.FC = () => {
  const data = {
    labels: [
      "5 hours ago",
      "4 hours ago",
      "3 hours ago",
      "2 hours ago",
      "1 hour ago",
      "Now",
    ],
    datasets: [
      {
        label: "Views",
        data: [0, 0, 0, 0, 0, 1],
        borderColor: "rgba(219, 80, 16)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
      {
        label: "Likes",
        data: [0, 0, 0, 0, 0, 0],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Mock Line Graph: Views and Likes (Last 5 Hours)",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time (Hours Ago)",
        },
      },
      y: {
        title: {
          display: true,
        },
      },
    },
  };

  return (
    <div className={styles.chart}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
