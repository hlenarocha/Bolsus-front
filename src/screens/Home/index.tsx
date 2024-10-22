import { useState, useEffect } from 'react';
import * as C from './styles';
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { items } from "../../data/items";
import { getCurrentMonth } from '../../helpers/dateFilter';
import { filterListByMonth } from '../../helpers/dateFilter';
import { TableArea } from '../../components/TableArea';
import { InfoArea } from '../../components/InfoArea';
import { AddArea } from '../../components/AddArea';
import logoImage from '../../assets/logo-bolsus.png';
import logoutImage from '../../assets/logout.png'
import { DataArea } from '../../components/DataArea';
import Modal from '../../components/Modal';
import incomeImage from '../../assets/income.png'
import expenseImage from '../../assets/expense.png'
import { useNavigate, useNavigation } from 'react-router-dom';


/* 
useState = hook que permite adicionar um estado local a um componente funcional. Retorna um array
com o valor atual do estado e a função que atualiza esse valor
useEffect = hook que permite realizar efeitos colaterais em componentes funcionais
(busca de dados, manipulação do DOM...). Monitora as mudanças nos estados ou em props,
executando código específico quando essas mudanças ocorrem.
Hooks = ligam funcionalidades do Reat a componentes funcionais

*/

interface ExpensesByCategory {
  [category: string]: number;
}

export const Home = () => {
  const navigate = useNavigate();

  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expensesByCategory, setExpensesByCategory] = useState<ExpensesByCategory>({});
  const [isOpenModalIncome, setIsOpenModalIncome] = useState(false);
  const [isOpenModalExpense, setIsOpenModalExpense] = useState(false);

  function handleLogout() {
    navigate('/login');
  }
 
 


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
    setExpense(expenseCount);

  }, 
  [filteredList]);

  useEffect(() => {
    const expensesByCategory: Record<string, number> = {};

    for (let i in filteredList) {
      const category = filteredList[i].category;
      const value = filteredList[i].value;
      if (categories[category].expense) {
        if (!expensesByCategory[category]) {
          expensesByCategory[category] = 0;
        }
        expensesByCategory[category] += value;
      }
    }
    setExpensesByCategory(expensesByCategory);
    console.log(expensesByCategory);

  }, [filteredList]);

  return(
    <C.Container>
      <Modal 
      categories={['Selecione uma categoria', 'Salário', 'Renda extra', 'Investimento', 'Venda', 'Prêmio']}
      imageUrl={incomeImage} 
      title='Adicionar renda' 
      description='Preencha as informações abaixo e adicione uma entrada financeira manualmente' 
      setIsOpen={setIsOpenModalIncome}
      isOpen={isOpenModalIncome}
      />
    

    <Modal 
      categories={['Selecione uma categoria', 'Alimentação', 'Moradia', 'Vestuário', 'Serviço', 'Lazer', 'Saúde', 'Transporte', 'Educação', 'Pets']}
      imageUrl={expenseImage} 
      title='Adicionar despesa' 
      description='Preencha as informações abaixo e adicione uma saída financeira manualmente' 
      setIsOpen={setIsOpenModalExpense}
      isOpen={isOpenModalExpense}
      />
      <C.Header>
        <C.Logo>
        <C.Image src={logoImage} />
        <C.HeaderTitle>Bolsus</C.HeaderTitle>
        </C.Logo>
        
        <C.HeaderSubtitle>Controle sua vida financeira e encha os <span style={{color: 'greenyellow'}}>Bolsus</span>.</C.HeaderSubtitle>
        <C.ImageLogout src={logoutImage} onClick={handleLogout}/>
      </C.Header>
      <C.Body>
        <C.Greeting>Olá, <span style={{color: 'greenyellow'}}>[user]</span>!</C.Greeting>
        <C.TextInteraction>Já tirou um tempo para sua vida financeira hoje?</C.TextInteraction>


        <InfoArea onMonthChange={handleMonthChange} 
        currentMonth={currentMonth} 
        income={income} 
        expense={expense} />

        <AddArea setIsOpenExpense={setIsOpenModalExpense} setIsOpenIncome={setIsOpenModalIncome} />

        <C.Analytics>
        <DataArea expensesByCategory={expensesByCategory} />
        <TableArea list={filteredList}/>
        </C.Analytics>
      </C.Body>
    </C.Container>
  );
}

