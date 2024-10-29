import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

// Registrar os componentes do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  expensesByCategory: { [key: string]: number };
}

export default function PieChartComponent({ expensesByCategory }: Props) {
  const data = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        label: 'Despesas por Categoria',
        data: Object.values(expensesByCategory),
        backgroundColor: ['#FF69B4', '#33CC33', '#6666CC', '#FFCC00', '#0099CC'],
        borderColor: ['#fff'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie style={{padding: 10}} data={data} />
  )
};
