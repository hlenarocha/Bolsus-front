import * as C from './styles';
import PieChartComponent from '../PieChart';

interface Props {
  expensesByCategory: { [key: string]: number };
}

export const DataArea = ({expensesByCategory}: Props) => {
  return (
    <C.Container>
      <C.Title>Despesas por categoria</C.Title>
      <PieChartComponent expensesByCategory={expensesByCategory}/>

    </C.Container>

  );
}