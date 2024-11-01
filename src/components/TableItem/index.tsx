
// TableItem.tsx
import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import deleteIcon from '../../assets/delete.png';
import { deleteExpenseData, deleteIncomeData } from '../../api/axiosInstance';
import { dataContext } from '../../contexts/datacontext';
import { useContext, useState } from 'react';
import { readExpenseData, readIncomeData } from '../../api/axiosInstance';
import ModalAreYouSure from '../ModalAreYouSure';

type Props = {
  item: Item;
}



export const TableItem = ({item}: Props) => {
  const [isOpenModalSure, setIsOpenModalSure] = useState(false);

  const context = useContext(dataContext);

  const formattedValue = item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

  const handleDeleteItem = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
      return alert('Você precisa estar logado para deletar um item!');
    }

    try {
      if (item.category.isExpense) {
      await deleteExpenseData(item.id, token);

      
  
      } else {
        await deleteIncomeData(item.id, token);
      }

      const expenses = await readExpenseData(token);
      const incomes = await readIncomeData(token);

      const newList = [
        ...expenses,
        ...incomes
      ];

      context?.setList(newList);

    }
      catch (err) {
        console.log(err);
      }

    }

    function handleModalSure() {
      setIsOpenModalSure(true);
    }
    
  

  return (
    <div>
      <ModalAreYouSure isOpen={isOpenModalSure} setIsOpen={setIsOpenModalSure} handleDelete={handleDeleteItem}></ModalAreYouSure>
    <C.TableLine>
      <C.TableColumn>{formatDate(new Date(item.date))}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={item.category.color}>
          {item.category.title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={item.category.isExpense ? 'red' : 'greenyellow'}>
          {formattedValue}
        </C.Value>
      </C.TableColumn>

      <C.DeleteIcon onClick={handleModalSure} src={deleteIcon}></C.DeleteIcon>        
      
    </C.TableLine>
    </div>
  );
}
