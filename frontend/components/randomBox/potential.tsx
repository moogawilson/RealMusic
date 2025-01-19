import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./potential.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Potential: React.FC = () => {
  const data = {
    labels: ["Potential", "Saturation"],
    datasets: [
      {
        label: "Engagement",
        data: [1, 99],
        backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className={styles.chart}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Potential;
