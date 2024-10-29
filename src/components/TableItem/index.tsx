
// TableItem.tsx
import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import deleteIcon from '../../assets/delete.png';

type Props = {
  item: Item;
}

export const TableItem = ({item}: Props) => {
  const formattedValue = item.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});

  return (
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
      
      <C.DeleteIcon src={deleteIcon}></C.DeleteIcon>        
      
    </C.TableLine>
  );
}
