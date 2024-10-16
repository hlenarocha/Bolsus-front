import * as C from './styles';
import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';

type Props = {
  list: Item[];
}

export const TableArea = ({list} : Props) => {
  return (
    <C.Table>
      <thead>
        <tr style={{width: '100%', borderBottom: '3px solid greenyellow', display: 'flex', justifyContent: 'space-around'}}>
          <C.TableHeadColumn >Data</C.TableHeadColumn>
          <C.TableHeadColumn >Categoria</C.TableHeadColumn>
          <C.TableHeadColumn >Título</C.TableHeadColumn>
          <C.TableHeadColumn >Valor</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody style={{width: '100%', display: 'flex', justifyContent: 'space-around', flexDirection: 'column'}}>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
        
      </tbody>
    </C.Table>
  );
}