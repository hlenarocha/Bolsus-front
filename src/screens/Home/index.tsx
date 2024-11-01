import { useState, useEffect, useContext } from 'react';
import * as C from './styles';
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter';
import { TableArea } from '../../components/TableArea';
import { InfoArea } from '../../components/InfoArea';
import { AddArea } from '../../components/AddArea';
import { useNavigate } from 'react-router-dom';
import { readClientInformation, readExpenseData, readIncomeData } from '../../api/axiosInstance';
import logoImage from '../../assets/logo-bolsus.png';
import logoutImage from '../../assets/logout.png';
import Modal from '../../components/Modal';
import incomeImage from '../../assets/income.png';
import expenseImage from '../../assets/expense.png';
import { DataArea } from '../../components/DataArea';
import { dataContext } from '../../contexts/datacontext';

interface ExpensesByCategory {
  [category: string]: number;
}

export const Home = () => {
  const navigate = useNavigate();
  
 // const [list, context.setList] = useState<Item[]>([]);
  const context = useContext(dataContext);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<any[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [expensesByCategory, setExpensesByCategory] = useState<ExpensesByCategory>({});
  const [isOpenModalIncome, setIsOpenModalIncome] = useState(false);
  const [isOpenModalExpense, setIsOpenModalExpense] = useState(false);
  const [clientName, setClientName] = useState("");

  const handleLogout = () => {
    navigate('/login');
  };

  useEffect(() => {
    const fetchClient = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const result = await readClientInformation(token);
          setClientName(result.name);
        } catch (err) {
          console.log(err);
        }
      } else {
        handleLogout();
      }
    };
    fetchClient();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const expenses = await readExpenseData(token);
          const incomes = await readIncomeData(token);

          const combinedList = [
            ...expenses,
            ...incomes
          ];

          context?.setList(combinedList);
        } catch (err) {
          console.log("Erro ao buscar dados: " + err);
        }
      }
    };
    getData();
  }, []);

  useEffect(() => {
    // Filtra a lista conforme o mês atual
    if (context) {
      const filtered = filterListByMonth(context.list, currentMonth);
    setFilteredList(filtered);

    let incomeCount = 0;
    let expenseCount = 0;
    const expensesByCategory: Record<string, number> = {};

    filtered.forEach(item => {
      if (item.category.isExpense) {
        expenseCount += item.value;
        expensesByCategory[item.category.title] = (expensesByCategory[item.category.title] || 0) + item.value;
      } else {
        incomeCount += item.value;
      }
    });

    setIncome(incomeCount);
    setExpense(expenseCount);
    setExpensesByCategory(expensesByCategory);
      
    }

    
  }, [context?.list, currentMonth]);

  return (
    <C.Container>
      <Modal
        categories={['Selecione uma categoria', 'Salário', 'Renda Extra', 'Investimento', 'Venda', 'Prêmio']}
        imageUrl={incomeImage}
        title='Adicionar renda'
        description='Preencha as informações abaixo e adicione uma entrada financeira manualmente'
        setIsOpen={setIsOpenModalIncome}
        isOpen={isOpenModalIncome}
        isExpense={false}
      />
      <Modal
        categories={['Selecione uma categoria', 'Alimentação', 'Moradia', 'Vestuário', 'Serviço', 'Lazer', 'Saúde', 'Transporte', 'Educação', 'Pets']}
        imageUrl={expenseImage}
        title='Adicionar despesa'
        description='Preencha as informações abaixo e adicione uma saída financeira manualmente'
        setIsOpen={setIsOpenModalExpense}
        isOpen={isOpenModalExpense}
        isExpense={true}
      />
      <C.Header>
        <C.Logo>
          <C.Image src={logoImage} />
          <C.HeaderTitle>Bolsus</C.HeaderTitle>
        </C.Logo>
        <C.HeaderSubtitle>Controle sua vida financeira e encha os <span style={{ color: 'greenyellow' }}>Bolsus</span>.</C.HeaderSubtitle>
        <C.ImageLogout src={logoutImage} onClick={handleLogout} />
      </C.Header>
      <C.Body>
        <C.Greeting>Olá, <span style={{ color: 'greenyellow' }}>{clientName}</span>!</C.Greeting>
        <C.TextInteraction>Já tirou um tempo para sua vida financeira hoje?</C.TextInteraction>
        <InfoArea onMonthChange={setCurrentMonth} currentMonth={currentMonth} income={income} expense={expense} />
        <AddArea setIsOpenExpense={setIsOpenModalExpense} setIsOpenIncome={setIsOpenModalIncome} />
        <C.Analytics>
          <DataArea expensesByCategory={expensesByCategory} />
          <TableArea list={filteredList} />
        </C.Analytics>
      </C.Body>
    </C.Container>
  );
};
