import * as C from './styles';
import { useState } from 'react';

export const InputArea = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  }

  return(
    <C.Container>
      <C.InputContainer>
        <C.Title>Data</C.Title>
        <input type='date' value={selectedDate} onChange={handleDataChange}/>
      </C.InputContainer>

      <C.InputContainer>
        <C.Title>Categoria</C.Title>
        <select>
          <option value=''>Selecione uma categoria</option>
          <option value=''>Alimentação</option>
          <option value=''>Aluguel</option>
          <option value=''>Salário</option>
        </select>
      </C.InputContainer>

      <C.InputContainer>
        <C.Title>Título</C.Title>
        <input type='text'/>
      </C.InputContainer>

      <C.InputContainer>
        <C.Title>Valor</C.Title>
        <input type='number'/>
      </C.InputContainer>
      
      <C.ButtonContainer>
      <button>Adicionar</button>

      </C.ButtonContainer>
    </C.Container>
  );
}