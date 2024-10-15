import * as C from './styles';
import { AddItem } from '../AddItem'

export const AddArea = () => {
  return(
    <C.Container>
      <AddItem title='Adicionar renda' source='../src/assets/income.png' subtitle='Criar uma renda manualmente'></AddItem>
      <AddItem title='Adicionar despesa' subtitle='Criar uma despesa manualmente' source='../src/assets/expense.png' />
    </C.Container>

  );
}