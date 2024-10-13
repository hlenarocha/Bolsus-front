import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Category } from "./types/Category";
import { Item } from "./types/Item";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { getCurrentMonth } from './helpers/dateFilter';
import { filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';

/* 
useState = hook que permite adicionar um estado local a um componente funcional. Retorna um array
com o valor atual do estado e a função que atualiza esse valor
useEffect = hook que permite realizar efeitos colaterais em componentes funcionais
(busca de dados, manipulação do DOM...). Monitora as mudanças nos estados ou em props,
executando código específico quando essas mudanças ocorrem.
Hooks = ligam funcionalidades do Reat a componentes funcionais

*/

const App = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);
 

  /* useEffect possui 2 parâmetros: 
  - função a ser executada a partir do monitoramento
  - variáveis a serem monitoradas */
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, 
  [list, currentMonth]);

  return(
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Bolsus</C.HeaderTitle>
        <C.HeaderSubtitle>Controle sua vida financeira e encha os Bolsus.</C.HeaderSubtitle>
      </C.Header>
      <C.Body>

        {/* Área de informações */}


        {/* Área de inserção */}

        <TableArea />


      </C.Body>
    </C.Container>
  );
}

export default App;