// components/PopulationChart.js
'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function PopulationChart({ populationData }) {
  // Extraer años y valores de población de los datos
  const years = populationData.map(data => data.year);
  const populationValues = populationData.map(data => data.value);

  // Configuración de los datos para Chart.js
  const chartData = {
    labels: years, 
    datasets: [
      {
        label: 'Population',
        data: populationValues, 
        borderColor: 'rgb(75, 185, 21)',
        fill: false,
        tension: 0.1,
        hoverBackgroundColor: 'rgb(75, 185, 21)'
      },
    ],
  };

  // Opciones del gráfico
  const options = {
    responsive: true,
    
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Population over time',
      },
    },
  };

  return <Line data={chartData} options={options} />;
}
