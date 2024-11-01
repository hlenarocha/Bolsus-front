import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

// Mapeamento das cores fornecidas para cada categoria
const colorMapping: { [category: string]: string } = {
  'Alimentação': '#F44336',
  'Moradia': '#2196F3',
  'Vestuário': '#E91E63',
  'Serviço': '#607D8B',
  'Lazer': '#FFC107',
  'Saúde': '#8BC34A',
  'Transporte': '#FFEB3B',
  'Educação': '#795548',
  'Pets': '#FF5722',
};

interface Props {
  expensesByCategory: { [category: string]: number };
}

export default function PieChartComponent({ expensesByCategory }: Props) {
  const data = {
    labels: Object.keys(expensesByCategory),
    datasets: [
      {
        label: 'Despesas por Categoria',
        data: Object.values(expensesByCategory),
        // Aplica a cor com base no mapeamento de cores
        backgroundColor: Object.keys(expensesByCategory).map(
          (category) => colorMapping[category] || '#CCCCCC' // Cor padrão caso a categoria não tenha uma cor mapeada
        ),
        borderColor: ['#fff'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie style={{ padding: 10 }} data={data} />
  );
}
