import React from 'react';
import * as PieChartJS from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar os elementos necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Definir os tipos dos props do PieChart
interface PieChartProps {
  labels: string[];   // Array de strings para as categorias
  data: number[];     // Array de números para os valores correspondentes
}

export const PieChart: React.FC<PieChartProps> = ({ labels, data }) => {
  // Tipar explicitamente o chartData para evitar erros de compilação
  const chartData: { 
    labels: string[], 
    datasets: { 
      label: string, 
      data: number[], 
      backgroundColor: string[], 
      hoverBackgroundColor: string[] 
    }[] 
  } = {
    labels: labels,
    datasets: [
      {
        label: 'Despesas por categoria',
        data: data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Cores das fatias do gráfico
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const // Tipagem precisa para o position
      }
    }
  };

};
