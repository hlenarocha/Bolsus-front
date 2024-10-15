import { useState, useEffect } from 'react';
import * as C from './styles';
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { items } from "../../data/items";
import { getCurrentMonth } from '../../helpers/dateFilter';
import { filterListByMonth } from '../../helpers/dateFilter';
import { TableArea } from '../../components/TableArea';
import { InfoArea } from '../../components/InfoArea';
import { InputArea } from '../../components/InputArea';
import { AddArea } from '../../components/AddArea';
import logoImage from '../../assets/logo-bolsus.png';
import logoutImage from '../../assets/logout.png'
import { DataArea } from '../../components/DataArea';


/* 
useState = hook que permite adicionar um estado local a um componente funcional. Retorna um array
com o valor atual do estado e a função que atualiza esse valor
useEffect = hook que permite realizar efeitos colaterais em componentes funcionais
(busca de dados, manipulação do DOM...). Monitora as mudanças nos estados ou em props,
executando código específico quando essas mudanças ocorrem.
Hooks = ligam funcionalidades do Reat a componentes funcionais

*/

export const Home = () => {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

 
  console.log(currentMonth);

  /* useEffect possui 2 parâmetros: 
  - função a ser executada a partir do monitoramento
  - variáveis a serem monitoradas */
  useEffect(() => {
    const filtered = filterListByMonth(list, currentMonth);
    setFilteredList(filtered);
    console.log(filtered);
  }, 
  [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount)

  }, [filteredList])

  return(
    <C.Container>
      <C.Header>
        <C.Logo>
        <C.Image src={logoImage} />
        <C.HeaderTitle>Bolsus</C.HeaderTitle>
        </C.Logo>
        
        <C.HeaderSubtitle>Controle sua vida financeira e encha os <span style={{color: 'greenyellow'}}>Bolsus</span>.</C.HeaderSubtitle>
        <C.ImageLogout src={logoutImage}></C.ImageLogout>
      </C.Header>
      <C.Body>
        <C.Greeting>Olá, <span style={{color: 'greenyellow'}}>[user]</span>!</C.Greeting>
        <C.TextInteraction>Já tirou um tempo para sua vida financeira hoje?</C.TextInteraction>


        <InfoArea onMonthChange={handleMonthChange} 
        currentMonth={currentMonth} 
        income={income} 
        expense={expense} />
        <AddArea />
        <InputArea />
        <C.Analytics>
        <DataArea/>
        <TableArea list={filteredList}/>

        </C.Analytics>
        
        
        



      </C.Body>
    </C.Container>
  );
}

