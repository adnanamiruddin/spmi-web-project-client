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
  const sorted = useMemo(
    () =>
      [...data].sort((a, b) => {
        if (a.order != null && b.order != null) return a.order - b.order;
        return (a.id ?? 0) - (b.id ?? 0);
      }),
    [data]
  );

  const labels = useMemo(() => sorted.map((d) => d.kriteria), [sorted]);

  const percentValues = useMemo(
    () =>
      sorted.map((d) => {
        if (d.nilai_persen != null) return Number(d.nilai_persen);
        return 0;
      }),
    [sorted]
  );

  const realValues = useMemo(
    () =>
      sorted.map((d) => {
        if (d.nilai_asli != null) return Number(d.nilai_asli);
        return null;
      }),
    [sorted]
  );

  const chartData = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Nilai",
          data: percentValues,
          nilaiAsli: realValues,
          backgroundColor: "rgba(59,130,246,0.28)",
          borderColor: "#3EAEFF",
          pointBackgroundColor: "#0BA5EC",
          pointBorderColor: "#ffffff",
          pointRadius: 4,
          borderWidth: 2,
          fill: true,
        },
      ],
    }),
    [labels, percentValues, realValues]
  );

  const options = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      elements: { line: { tension: 0.2 } },
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
        title: { display: false },
        tooltip: {
          enabled: true,
          callbacks: {
            label: function (context) {
              const idx = context.dataIndex;
              const dataset = context.dataset || {};
              const parsed = context.parsed;
              const percentRaw =
                typeof parsed === "object" ? parsed.r ?? parsed : parsed;
              const percentNum = Number(percentRaw);
              let asli = dataset.nilaiAsli?.[idx];
              if (asli == null && Number.isFinite(percentNum)) {
                asli = +(percentNum / 20).toFixed(2);
              }
              if (asli != null) return `Nilai asli: ${asli}`;
              if (Number.isFinite(percentNum))
                return `${context.dataset.label}: ${percentNum}%`;
              return "";
            },
          },
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          suggestedMin: 0,
          suggestedMax: maxValue,
          ticks: {
            display: false,
            stepSize: 20,
            color: "#6b7280",
            backdropColor: "transparent",
          },
          grid: { color: "#D5D7DA" },
          angleLines: { color: "#D5D7DA" },
          pointLabels: { color: "#111827", font: { size: 12 }, padding: 8 },
        },
      },
    }),
    [maxValue]
  );

  return (
    <div style={{ height }}>
      {/* @ts-ignore */}
      <Radar data={chartData} options={options} />
    </div>
  );
}
