import * as C from "./styles";
import { AddItem } from "../AddItem";
import IncomeImage from "../../assets/income.png";
import ExpenseImage from "../../assets/expense.png";
interface Props {
  setIsOpenIncome: (isOpen: boolean) => void;
  setIsOpenExpense: (isOpen: boolean) => void;
}

export const AddArea = ({ setIsOpenIncome, setIsOpenExpense }: Props) => {
  return (
    <C.Container>
      <AddItem
        setIsOpen={setIsOpenIncome}
        title="Adicionar renda"
        source={IncomeImage}
        subtitle="Criar uma renda manualmente"
      ></AddItem>
      <AddItem
        setIsOpen={setIsOpenExpense}
        title="Adicionar despesa"
        subtitle="Criar uma despesa manualmente"
        source={ExpenseImage}
      />
    </C.Container>
  );
};
