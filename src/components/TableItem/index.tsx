import * as C from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
  item: Item;
}

export const TableItem = ({item}: Props) => {
  let date = formatDate(item.date);

  console.log(date);

  return (
    <C.TableLine>
     <C.TableColumn>{date}</C.TableColumn>
     <C.TableColumn>
      <C.Category color={categories[item.category].color}>
      {categories[item.category].title}
      </C.Category>

     </C.TableColumn>
     <C.TableColumn>{item.title}</C.TableColumn>
     <C.TableColumn>
      <C.Value color={categories[item.category].expense ? 'red' : 'greenyellow'}>R$ {item.value}
      </C.Value>
      </C.TableColumn>

      
    </C.TableLine>
  );
}