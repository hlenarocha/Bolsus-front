import * as C from './styles';
import { AddItem } from '../AddItem'

interface Props {
  setIsOpenIncome: (isOpen: boolean) => void;
  setIsOpenExpense: (isOpen: boolean) => void;
}

export const AddArea = ({setIsOpenIncome, setIsOpenExpense}: Props) => {
 
  return( 
    <C.Container>
      <AddItem setIsOpen={setIsOpenIncome} title='Adicionar renda' source='../src/assets/income.png' subtitle='Criar uma renda manualmente'></AddItem>
      <AddItem setIsOpen={setIsOpenExpense} title='Adicionar despesa' subtitle='Criar uma despesa manualmente' source='../src/assets/expense.png' />
    </C.Container>

  );
}