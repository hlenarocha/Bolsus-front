import * as  C from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';
import { ResumeItem } from '../ResumeItem';

type Props = {
  currentMonth: string;
  onMonthChange: (newMonth: string) => void;
  income: number;
  expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense}: Props) => {
  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-');
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
    currentDate.setMonth( currentDate.getMonth() - 1 );
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  const handleNextMonth = () => {
      let [year, month] = currentMonth.split('-');
      let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      currentDate.setMonth( currentDate.getMonth() + 1 );
      onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
  }

  return(
    <C.ContainerInfo>
      
     <C.ContainerResume>
      <C.ContainerReceitasDespesas>
      <C.Container style={{marginRight: 20}}>
     <ResumeItem title="Receitas" value={income} />
     </C.Container>

     <C.Container>
     <ResumeItem title="Despesas" value={expense} />
     </C.Container>

      </C.ContainerReceitasDespesas>
     
     
     <C.ContainerSaldo style={{backgroundImage: `linear-gradient(to bottom, ${income - expense > 0 ? 'greenyellow' : 'red'}, #29292c, #161616`}}>
     <ResumeItem title="Saldo" value={income - expense} color={(income-expense) <= 0 ? 'red' : 'greenyellow'}/>
     </C.ContainerSaldo>
     </C.ContainerResume>

     <C.Container>
      <C.MonthArea>
        <C.MonthArrow onClick={handlePrevMonth}>←</C.MonthArrow>
        <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow onClick={handleNextMonth}>→</C.MonthArrow>
      </C.MonthArea>
      </C.Container>
      
    </C.ContainerInfo>

  );
}
 