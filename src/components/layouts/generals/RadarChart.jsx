import { useMemo } from "react";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

const Radar = dynamic(() => import("react-chartjs-2").then((m) => m.Radar), {
  ssr: false,
});

export default function RadarChart({
  data = [],
  maxValue = 100,
  height = 300,
}) {
  // Data: array of objects with { id, kriteria, nilai, order }
  const sorted = useMemo(
    () =>
      [...data].sort((a, b) => {
        if (a.order != null && b.order != null) return a.order - b.order;
        return a.id - b.id;
      }),
    [data]
  );

  const labels = useMemo(() => sorted.map((d) => d.kriteria), [sorted]);
  const values = useMemo(() => sorted.map((d) => d.nilai), [sorted]);

  const chartData = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          label: "Nilai",
          data: values,
          backgroundColor: "rgba(59,130,246,0.28)",
          borderColor: "rgba(59,130,246,1)",
          pointBackgroundColor: "rgba(59,130,246,1)",
          pointBorderColor: "#fff",
          pointRadius: 4,
          borderWidth: 2,
          fill: true,
        },
      ],
    };
  }, [labels, values]);

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          tension: 0.2,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: "#374151",
            usePointStyle: true,
            pointStyle: "circle",
          },
        },
        title: {
          display: false,
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: maxValue,
          ticks: {
            stepSize: 20,
            color: "#6b7280",
            backdropColor: "transparent",
          },
          grid: {
            color: "rgba(107,114,128,0.15)",
          },
          angleLines: {
            color: "rgba(107,114,128,0.15)",
          },
          pointLabels: {
            color: "#111827",
            font: {
              size: 12,
            },
            // Use padding to move labels away a bit
            padding: 8,
          },
        },
      },
    }),
    [maxValue]
  );

  return (
    <div style={{ height: height }}>
      {/* @ts-ignore */}
      <Radar data={chartData} options={options} />
    </div>
  );
}
